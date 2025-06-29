import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const blockUiVariants = cva('relative', {
  variants: {
    blocking: {
      true: 'pointer-events-none select-none',
      false: '',
    },
  },
  defaultVariants: {
    blocking: false,
  },
});

const overlayVariants = cva(
  'absolute inset-0 z-50 flex items-center justify-center bg-background/60 backdrop-blur-sm',
  {
    variants: {
      keepInView: {
        true: 'fixed',
        false: 'absolute',
      },
    },
    defaultVariants: {
      keepInView: false,
    },
  }
);

const DefaultLoader = () => (
  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
);

// Context for BlockUI
interface BlockUIContextType {
  isBlocking: boolean;
  startBlock: (
    message?: string | React.ReactNode,
    loader?: React.ReactElement
  ) => void;
  stopBlock: () => void;
  message?: string | React.ReactNode;
  loader?: React.ReactElement;
}

const BlockUIContext = React.createContext<BlockUIContextType | undefined>(
  undefined
);

// BlockUI Provider
export interface BlockUIProviderProps {
  children: React.ReactNode;
}

export function BlockUIProvider({ children }: BlockUIProviderProps) {
  const [isBlocking, setIsBlocking] = React.useState(false);
  const [message, setMessage] = React.useState<string | React.ReactNode>();
  const [loader, setLoader] = React.useState<React.ReactElement>();

  const startBlock = React.useCallback(
    (newMessage?: string | React.ReactNode, newLoader?: React.ReactElement) => {
      setMessage(newMessage);
      setLoader(newLoader);
      setIsBlocking(true);
    },
    []
  );

  const stopBlock = React.useCallback(() => {
    setIsBlocking(false);
    setMessage(undefined);
    setLoader(undefined);
  }, []);

  const contextValue = React.useMemo(
    () => ({
      isBlocking,
      startBlock,
      stopBlock,
      message,
      loader,
    }),
    [isBlocking, startBlock, stopBlock, message, loader]
  );

  return (
    <BlockUIContext.Provider value={contextValue}>
      {children}
    </BlockUIContext.Provider>
  );
}

// useBlock hook
export function useBlock() {
  const context = React.useContext(BlockUIContext);
  if (context === undefined) {
    throw new Error('useBlock must be used within a BlockUIProvider');
  }
  return context;
}

export interface BlockUiProps extends VariantProps<typeof blockUiVariants> {
  /** Set whether the component should block its children (overrides context if provided) */
  blocking?: boolean;
  /** Children to display */
  children?: React.ReactNode;
  /** CSS class name to pass to component */
  className?: string;
  /** Set whether the blocking component should follow the scroll or stay at a fixed position */
  keepInView?: boolean;
  /** Loader component to use (overrides context if provided) */
  loader?: React.ReactElement;
  /** The message to display. Can also be a component. (overrides context if provided) */
  message?: string | React.ReactNode;
  /** Control if the children are shown when the component is being blocked */
  renderChildren?: boolean;
  /** Tag to render as container element */
  as?: React.ElementType;
}

function BlockUi({
  blocking,
  children,
  className,
  keepInView = false,
  loader,
  message,
  renderChildren = true,
  as,
  ...props
}: BlockUiProps & React.HTMLAttributes<HTMLElement>) {
  const Component = as || 'div';

  // Try to get context, but don't throw if not available
  const context = React.useContext(BlockUIContext);

  // Use prop values first, then fall back to context values
  const isBlocking =
    blocking !== undefined ? blocking : context?.isBlocking ?? false;
  const currentLoader = loader !== undefined ? loader : context?.loader;
  const currentMessage = message !== undefined ? message : context?.message;

  return (
    <Component
      className={cn(blockUiVariants({ blocking: isBlocking, className }))}
      {...props}
    >
      {renderChildren && children}
      {isBlocking && (
        <div className={cn(overlayVariants({ keepInView }))} aria-hidden="true">
          <div className="flex flex-col items-center gap-4">
            {currentLoader || <DefaultLoader />}
            {currentMessage && (
              <div className="text-sm font-medium text-foreground">
                {currentMessage}
              </div>
            )}
          </div>
        </div>
      )}
    </Component>
  );
}

export { BlockUi, blockUiVariants };
