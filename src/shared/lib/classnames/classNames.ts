type Mods = Record<string, boolean | string>;

export function classNames(cls: string, mods: Mods, adds: string[]): string {
  return [
    cls,
    ...adds,
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ');
}

classNames('remove-btn', { hovered: true, selectable: true, red: true }, [
  'pdg',
]);
