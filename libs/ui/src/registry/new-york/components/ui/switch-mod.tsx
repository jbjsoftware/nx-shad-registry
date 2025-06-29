import * as React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';

import { cn } from '@/lib/utils';

interface SwitchModProps
  extends React.ComponentProps<typeof SwitchPrimitive.Root> {
  trueLabel?: string;
  falseLabel?: string;
}

function SwitchMod({
  className,
  trueLabel,
  falseLabel,
  checked,
  defaultChecked,
  ...props
}: SwitchModProps) {
  const [isChecked, setIsChecked] = React.useState(defaultChecked || false);

  // Use controlled state if checked prop is provided, otherwise use internal state
  const currentState = checked !== undefined ? checked : isChecked;

  const handleChange = (value: boolean) => {
    if (checked === undefined) {
      setIsChecked(value);
    }
    props.onCheckedChange?.(value);
  };

  const displayLabel = currentState ? trueLabel : falseLabel;

  return (
    <div className="flex items-center gap-2">
      <SwitchPrimitive.Root
        data-slot="switch"
        className={cn(
          'peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        checked={currentState}
        onCheckedChange={handleChange}
        {...props}
      >
        <SwitchPrimitive.Thumb
          data-slot="switch-thumb"
          className={cn(
            'bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0'
          )}
        />
      </SwitchPrimitive.Root>
      {displayLabel && (
        <span className="text-sm text-foreground select-none">
          {displayLabel}
        </span>
      )}
    </div>
  );
}

export { SwitchMod, type SwitchModProps };
