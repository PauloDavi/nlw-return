type BrandButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function BrandButton({
  className,
  children,
  ...restProps
}: BrandButtonProps) {
  return (
    <button
      className={[
        'p-2 rounded-md border-transparent flex-1 flex justify-center',
        'items-center text-sm hover:bg-brand-hover focus:outline-none focus:ring-2',
        'text-text-on-brand-color',
        'focus:ring-offset-surface-primary dark:focus:ring-offset-dark-surface-primary',
        'disabled:focus:bg-brand disabled:cursor-not-allowed disabled:hover:bg-brand-hover',
        'focus:ring-offset-2 focus:ring-brand transition-colors disabled:opacity-50',
        'bg-brand',
        className,
      ].join(' ')}
      {...restProps}
    >
      {children}
    </button>
  );
}
