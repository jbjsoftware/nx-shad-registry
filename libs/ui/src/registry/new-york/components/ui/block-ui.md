# BlockUI Component

A flexible loading overlay component that can block user interaction while displaying loading states.

## Features

- **Two usage patterns**: Traditional prop-based and modern context-based
- **Customizable loaders**: Default spinner or custom components
- **Loading messages**: Optional text or React components
- **Flexible positioning**: Fixed or absolute positioning
- **Accessibility**: Proper ARIA attributes
- **TypeScript support**: Full type safety

## Installation

The component is part of the `@nx-shad-registry/ui` package.

```tsx
import { BlockUi, BlockUIProvider, useBlock } from '@nx-shad-registry/ui';
```

## Usage

### Traditional Prop-Based Usage

```tsx
import { useState } from 'react';
import { BlockUi } from '@nx-shad-registry/ui';

function MyComponent() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await someAsyncOperation();
    } finally {
      setLoading(false);
    }
  };

  return (
    <BlockUi blocking={loading} message="Processing...">
      <div>
        <h2>Content</h2>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </BlockUi>
  );
}
```

### Context-Based Usage with useBlock Hook

```tsx
import { BlockUi, BlockUIProvider, useBlock } from '@nx-shad-registry/ui';

function MyComponent() {
  const { startBlock, stopBlock, isBlocking } = useBlock();

  const handleSubmit = async () => {
    startBlock('Processing your request...');
    try {
      await someAsyncOperation();
    } finally {
      stopBlock();
    }
  };

  return (
    <BlockUi>
      <div>
        <h2>Content</h2>
        <button onClick={handleSubmit} disabled={isBlocking}>
          {isBlocking ? 'Processing...' : 'Submit'}
        </button>
      </div>
    </BlockUi>
  );
}

// Wrap your app or component tree with the provider
function App() {
  return (
    <BlockUIProvider>
      <MyComponent />
    </BlockUIProvider>
  );
}
```

## API Reference

### BlockUi Props

| Prop             | Type                  | Default     | Description                                              |
| ---------------- | --------------------- | ----------- | -------------------------------------------------------- |
| `blocking`       | `boolean`             | `undefined` | Whether to show the blocking overlay (overrides context) |
| `children`       | `ReactNode`           | `undefined` | Content to potentially block                             |
| `className`      | `string`              | `undefined` | Additional CSS classes                                   |
| `keepInView`     | `boolean`             | `false`     | Whether overlay should be fixed positioned               |
| `loader`         | `ReactElement`        | `undefined` | Custom loader component (overrides context)              |
| `message`        | `string \| ReactNode` | `undefined` | Loading message (overrides context)                      |
| `renderChildren` | `boolean`             | `true`      | Whether to show children when blocking                   |
| `as`             | `ElementType`         | `"div"`     | HTML element to render as container                      |

### useBlock Hook

Returns an object with the following properties:

| Property     | Type                          | Description                |
| ------------ | ----------------------------- | -------------------------- |
| `isBlocking` | `boolean`                     | Current blocking state     |
| `startBlock` | `(message?, loader?) => void` | Function to start blocking |
| `stopBlock`  | `() => void`                  | Function to stop blocking  |
| `message`    | `string \| ReactNode`         | Current message            |
| `loader`     | `ReactElement`                | Current loader             |

#### startBlock Function

```tsx
startBlock(message?: string | ReactNode, loader?: ReactElement)
```

- `message`: Optional loading message to display
- `loader`: Optional custom loader component

### BlockUIProvider

A context provider that manages blocking state for child components.

```tsx
<BlockUIProvider>{/* Your app components */}</BlockUIProvider>
```

## Examples

### Custom Loader

```tsx
const customLoader = <div className="text-2xl animate-spin">⚡</div>

// With props
<BlockUi blocking={true} loader={customLoader} message="Fast loading!">
  <Content />
</BlockUi>

// With context
const { startBlock } = useBlock()
startBlock("Fast loading!", customLoader)
```

### Multiple Components, Same Context

```tsx
<BlockUIProvider>
  <BlockUi>
    <Card1 />
  </BlockUi>
  <BlockUi>
    <Card2 />
  </BlockUi>
  {/* Both cards will block when startBlock() is called */}
</BlockUIProvider>
```

### Mixed Usage

You can combine both approaches - props override context values:

```tsx
<BlockUIProvider>
  <BlockUi message="Override context message">
    <Content />
  </BlockUi>
</BlockUIProvider>
```

## Styling

The component uses Tailwind CSS classes and follows the shadcn/ui design system. You can customize the appearance by:

1. Modifying the `blockUiVariants` and `overlayVariants` in the source
2. Passing custom `className` props
3. Creating custom loader components
4. Using CSS custom properties for theming
