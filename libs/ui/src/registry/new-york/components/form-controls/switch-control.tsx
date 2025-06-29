import { Switch } from '@/registry/new-york/components/ui/switch';
import { SwitchMod } from '@/registry/new-york/components/ui/switch-mod';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/registry/new-york/components/ui/form';
import { useFormContext, FieldPath, FieldValues } from 'react-hook-form';

interface SwitchControlProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
  name: TName;
  label?: string;
  description?: string;
  required?: boolean;
  disabled?: boolean;
  trueLabel?: string;
  falseLabel?: string;
}

export function SwitchControl<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  name,
  label,
  description,
  required = false,
  disabled = false,
  trueLabel,
  falseLabel,
}: SwitchControlProps<TFieldValues, TName>) {
  const { control, formState } = useFormContext<TFieldValues>();
  const hasError = !!formState.errors[name];

  // Use SwitchMod if either trueLabel or falseLabel is provided, otherwise use regular Switch
  const useSwitchMod = !!(trueLabel || falseLabel);

  return (
    <FormField
      control={control}
      name={name}
      disabled={disabled}
      render={({ field: { value, onChange, ...field } }) => (
        <FormItem>
          {label && (
            <FormLabel className={hasError ? 'text-destructive' : ''}>
              {label}
              {required && <span className="ml-1">*</span>}
            </FormLabel>
          )}
          <FormControl>
            <div className="flex items-center space-x-2">
              {useSwitchMod ? (
                <SwitchMod
                  checked={value}
                  onCheckedChange={onChange}
                  disabled={disabled}
                  trueLabel={trueLabel}
                  falseLabel={falseLabel}
                  {...field}
                />
              ) : (
                <Switch
                  checked={value}
                  onCheckedChange={onChange}
                  disabled={disabled}
                  {...field}
                />
              )}
            </div>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
