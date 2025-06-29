import React, { useState } from 'react';
import { BlockUi, BlockUIProvider, useBlock } from './block-ui';

// Example component using the useBlock hook
const ContextBasedExample = () => {
  const { startBlock, stopBlock, isBlocking } = useBlock();

  const handleStartBlock = () => {
    startBlock('Processing with context...');
    // Simulate async operation
    setTimeout(() => stopBlock(), 3000);
  };

  const handleCustomBlock = () => {
    startBlock(
      'Custom loader from context',
      <div className="text-3xl animate-bounce">🔄</div>
    );
    setTimeout(() => stopBlock(), 2000);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Context-Based BlockUI Examples</h2>

      {/* Context-based blocking */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Using useBlock Hook</h3>
        <BlockUi>
          <div className="p-6 border rounded-lg bg-card">
            <h4 className="font-medium mb-2">Context Controlled Card</h4>
            <p className="text-muted-foreground mb-4">
              This card is controlled by the context provider using the useBlock
              hook.
            </p>
            <div className="flex gap-2">
              <button
                onClick={handleStartBlock}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
                disabled={isBlocking}
              >
                {isBlocking ? 'Blocking...' : 'Start Block'}
              </button>
              <button
                onClick={handleCustomBlock}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80"
                disabled={isBlocking}
              >
                Custom Block
              </button>
              <button
                onClick={stopBlock}
                className="px-4 py-2 bg-destructive text-destructive-foreground rounded-md hover:bg-destructive/90"
                disabled={!isBlocking}
              >
                Stop Block
              </button>
            </div>
          </div>
        </BlockUi>
      </div>

      {/* Multiple BlockUi components sharing the same context */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">
          Multiple Components, Same Context
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <BlockUi>
            <div className="p-4 border rounded-lg bg-card">
              <h4 className="font-medium mb-2">Card 1</h4>
              <p className="text-sm text-muted-foreground">
                This card shares the same blocking context.
              </p>
            </div>
          </BlockUi>
          <BlockUi>
            <div className="p-4 border rounded-lg bg-card">
              <h4 className="font-medium mb-2">Card 2</h4>
              <p className="text-sm text-muted-foreground">
                Both cards block simultaneously.
              </p>
            </div>
          </BlockUi>
        </div>
      </div>
    </div>
  );
};

export const BlockUiExample = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    // Simulate async operation
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold">BlockUi Component Examples</h1>

      {/* Traditional prop-based usage */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Traditional Prop-Based Usage</h2>

        {/* Basic Example */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Basic Usage</h3>
          <BlockUi blocking={loading}>
            <div className="p-6 border rounded-lg bg-card">
              <h4 className="font-medium mb-2">Card Content</h4>
              <p className="text-muted-foreground">
                This content will be blocked when the loading state is active.
              </p>
              <button
                onClick={handleSubmit}
                className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Start Loading'}
              </button>
            </div>
          </BlockUi>
        </div>

        {/* With Custom Message */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">With Custom Message</h3>
          <BlockUi blocking={loading} message="Processing your request...">
            <div className="p-6 border rounded-lg bg-card">
              <h4 className="font-medium mb-2">Another Card</h4>
              <p className="text-muted-foreground">
                This shows a custom loading message.
              </p>
            </div>
          </BlockUi>
        </div>

        {/* With Custom Loader */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">With Custom Loader</h3>
          <BlockUi
            blocking={loading}
            loader={<div className="text-2xl">⏳</div>}
            message="Custom loader with emoji"
          >
            <div className="p-6 border rounded-lg bg-card">
              <h4 className="font-medium mb-2">Custom Loader Card</h4>
              <p className="text-muted-foreground">
                This uses a custom loader component instead of the default
                spinner.
              </p>
            </div>
          </BlockUi>
        </div>

        {/* As Different HTML Element */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">As Section Element</h3>
          <BlockUi blocking={loading} as="section">
            <div className="p-6 border rounded-lg bg-card">
              <h4 className="font-medium mb-2">Section Element</h4>
              <p className="text-muted-foreground">
                This BlockUi renders as a section element instead of a div.
              </p>
            </div>
          </BlockUi>
        </div>
      </section>

      {/* Context-based usage */}
      <section>
        <BlockUIProvider>
          <ContextBasedExample />
        </BlockUIProvider>
      </section>
    </div>
  );
};
