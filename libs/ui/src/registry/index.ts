import { RegistryItem } from './schema';
import { themes } from './registry-themes';

// Components registry
const components: RegistryItem[] = [
  {
    name: 'input-control',
    type: 'registry:component',
    title: 'Input Control',
    description: 'A form input control.',
    registryDependencies: ['input', 'label', 'form'],
    files: [
      {
        path: 'src/registry/new-york/components/form-controls/input-control.tsx',
        type: 'registry:component',
      },
    ],
  },
  {
    name: 'number-input-control',
    type: 'registry:component',
    title: 'Number Input Control',
    description: 'A form number input control.',
    registryDependencies: ['input', 'label', 'form'],
    files: [
      {
        path: 'src/registry/new-york/components/form-controls/number-input-control.tsx',
        type: 'registry:component',
      },
    ],
  },
  {
    name: 'select-control',
    type: 'registry:component',
    title: 'Select Control',
    description: 'A form select control.',
    registryDependencies: ['select', 'label', 'form'],
    files: [
      {
        path: 'src/registry/new-york/components/form-controls/select-control.tsx',
        type: 'registry:component',
      },
    ],
  },
];

// Combined registry
export const registry: RegistryItem[] = [...components, ...themes];

export { themes };
