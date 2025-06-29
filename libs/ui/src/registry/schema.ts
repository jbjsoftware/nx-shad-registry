import { registryItemSchema, type Registry } from 'shadcn/registry';

export type RegistryItem = typeof registryItemSchema._output;
export { registryItemSchema, type Registry };
