/**
 * Generates the full component catalog from the library's exports.
 * Run with: node scripts/generate-catalog.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const componentsFile = fileURLToPath(new URL('../../packages/neu-ui/src/components.ts', import.meta.url))
const outputFile = fileURLToPath(new URL('../src/data/catalog.generated.ts', import.meta.url))

const source = readFileSync(componentsFile, 'utf8')
const names = [...source.matchAll(/export \{ default as Neu(\w+) \}/g)].map(m => m[1])
names.push('Chart')

/** Metadata written by hand for components with a dedicated demo page. */
const meta = {
  Accordion: ['Collapsible content panels', '/navigation/accordion'],
  Alert: ['Contextual feedback message', '/elements/alert'],
  Avatar: ['User profile picture', '/elements/avatar'],
  AvatarGroup: ['Stack of avatars', '/elements/avatar'],
  Badge: ['Small status descriptor', '/elements/badge'],
  Breadcrumb: ['Hierarchical path', '/navigation/breadcrumb'],
  Button: ['Trigger an action', '/elements/button'],
  Calendar: ['Date picker calendar', '/forms/advanced'],
  Card: ['Content container', '/elements/card'],
  Checkbox: ['Multiple choice control', '/forms/choices'],
  CheckboxGroup: ['Group of checkboxes', '/forms/choices'],
  Chip: ['Indicator dot', '/elements/indicators'],
  Collapsible: ['Single collapsible panel', '/data/user'],
  ColorPicker: ['Color selection', '/forms/advanced'],
  CommandPalette: ['Searchable command list', '/navigation/command'],
  Container: ['Centered page width', '/layout/page'],
  ContextMenu: ['Right-click menu', '/overlays/menus'],
  ContextMenuContent: ['Context menu panel (internal helper)', '/overlays/menus'],
  Drawer: ['Draggable sheet', '/overlays/modal'],
  DropdownMenu: ['Action menu', '/overlays/menus'],
  DropdownMenuContent: ['Dropdown panel (internal helper)', '/overlays/menus'],
  Empty: ['Empty state', '/layout/page'],
  FieldGroup: ['Join form fields', '/forms/input'],
  FileUpload: ['Drag & drop upload', '/forms/advanced'],
  Form: ['Schema driven form', '/forms/validation'],
  FormField: ['Label, hint & error wrapper', '/forms/validation'],
  Icon: ['Iconify icon', '/elements/icons'],
  Input: ['Text input', '/forms/input'],
  InputDate: ['Date segments input', '/forms/advanced'],
  InputMenu: ['Input with a menu', '/forms/select'],
  InputNumber: ['Numeric input with steppers', '/forms/slider'],
  InputRating: ['Star rating', '/forms/slider'],
  InputTags: ['Free-form tags', '/forms/select'],
  InputTime: ['Time segments input', '/forms/advanced'],
  Kbd: ['Keyboard key', '/elements/indicators'],
  Listbox: ['Custom option list', '/forms/select'],
  Marquee: ['Infinite scrolling content'],
  Modal: ['Dialog window', '/overlays/modal'],
  NavigationMenu: ['Site navigation with popovers', '/navigation/menu'],
  PageCard: ['Content card', '/layout/page'],
  PageHero: ['Hero section', '/layout/page'],
  PageSection: ['Content section', '/layout/page'],
  Pagination: ['Page switcher', '/navigation/breadcrumb'],
  PinInput: ['Segmented code input', '/forms/advanced'],
  Popover: ['Floating content', '/overlays/menus'],
  Progress: ['Task completion', '/elements/indicators'],
  ProgressGroup: ['Grouped progress bars', '/elements/indicators'],
  RadioGroup: ['Single choice control', '/forms/choices'],
  ScrollArea: ['Custom scrollbars', '/layout/shell'],
  Select: ['Dropdown selection', '/forms/select'],
  SelectMenu: ['Custom select trigger', '/forms/select'],
  Separator: ['Visual divider', '/elements/indicators'],
  Sidebar: ['Collapsible sidebar', '/layout/shell'],
  Skeleton: ['Loading placeholder', '/elements/indicators'],
  Slideover: ['Edge panel', '/overlays/modal'],
  Slider: ['Range selection', '/forms/slider'],
  Stepper: ['Multi-step progress', '/navigation/menu'],
  Switch: ['Toggle control', '/forms/slider'],
  Table: ['Accessible data table', '/data/table'],
  Tabs: ['Tabbed interface', '/navigation/tabs'],
  Textarea: ['Multi-line input', '/forms/input'],
  Timeline: ['Chronological events', '/data/timeline'],
  Toast: ['Temporary notification', '/overlays/toast'],
  Toaster: ['Toast host', '/overlays/toast'],
  Tooltip: ['Hover hint', '/overlays/menus'],
  Tree: ['Nested tree view', '/data/user'],
  User: ['Avatar with name', '/data/user']
}

const categoryOverrides = {
  App: 'Utilities',
  AuthForm: 'Forms',
  ContextMenuContent: 'Overlays',
  DropdownMenuContent: 'Overlays',
  Listbox: 'Forms',
  ProgressGroup: 'Elements',
  ScrollArea: 'Layout',
  Toaster: 'Overlays',
  Chart: 'Data'
}

const layout = /^(Page|Dashboard|Footer|Header|Main|Container|Sidebar|FooterColumns|ScrollArea)/
const content = /^(Blog|Changelog|Chat|Editor|Pricing|Error)/
const forms = /^(Input|Select|Checkbox|Radio|Switch|Slider|Form|Field|File|Color|Calendar|Pin|Listbox|AuthForm)/
const overlays = /^(Modal|Slideover|Drawer|Dropdown|Context|Popover|Tooltip|Toast|Toaster|CommandPalette)/
const data = /^(Table|Timeline|Tree|User|Chart|Carousel)/
const navigation = /^(Tabs|Accordion|Breadcrumb|Pagination|NavigationMenu|Stepper|Sidebar)/
const elements = /^(Button|Badge|Alert|Avatar|Card|Chip|Icon|Kbd|Link|Marquee|Progress|Separator|Skeleton|Empty|App)/

function categoryOf(name) {
  if (categoryOverrides[name]) return categoryOverrides[name]
  if (layout.test(name)) return 'Layout'
  if (content.test(name)) return 'Content & marketing'
  if (overlays.test(name)) return 'Overlays'
  if (forms.test(name)) return 'Forms'
  if (navigation.test(name)) return 'Navigation'
  if (data.test(name)) return 'Data'
  if (elements.test(name)) return 'Elements'
  return 'Utilities'
}

const groupOrder = ['Elements', 'Forms', 'Navigation', 'Overlays', 'Data', 'Layout', 'Content & marketing', 'Utilities']
const groupIcons = {
  Elements: 'i-lucide-shapes',
  Forms: 'i-lucide-text-cursor-input',
  Navigation: 'i-lucide-compass',
  Overlays: 'i-lucide-layers',
  Data: 'i-lucide-database',
  Layout: 'i-lucide-layout-dashboard',
  'Content & marketing': 'i-lucide-newspaper',
  Utilities: 'i-lucide-wrench'
}

const groups = new Map(groupOrder.map(label => [label, []]))
for (const name of names.sort((a, b) => a.localeCompare(b))) {
  const [description = `Nuxt UI ${name} component.`, to] = meta[name] ?? []
  groups.get(categoryOf(name)).push({ name, description, ...(to ? { to } : {}) })
}

const lines = [
  '// Auto-generated by scripts/generate-catalog.mjs — do not edit by hand.',
  "import type { CatalogGroup } from './types'",
  '',
  'export const catalog: CatalogGroup[] = ['
]

for (const label of groupOrder) {
  const items = groups.get(label)
  if (!items.length) continue
  lines.push('  {')
  lines.push(`    label: ${JSON.stringify(label)},`)
  lines.push(`    icon: ${JSON.stringify(groupIcons[label])},`)
  lines.push('    items: [')
  for (const item of items) {
    const parts = [`name: ${JSON.stringify(item.name)}`, `description: ${JSON.stringify(item.description)}`]
    if (item.to) parts.push(`to: ${JSON.stringify(item.to)}`)
    lines.push(`      { ${parts.join(', ')} },`)
  }
  lines.push('    ]')
  lines.push('  },')
}

lines.push(']')
lines.push('')
lines.push('export const catalogCount = catalog.reduce((total, group) => total + group.items.length, 0)')
lines.push('')

writeFileSync(outputFile, lines.join('\n'))
console.log(`✔ generated ${names.length} catalog entries`)
