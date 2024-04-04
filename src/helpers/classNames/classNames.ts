
type Mods = Record<string, boolean | string>


export const classNames = (cls: string, mods: Mods, additional: string[]): string => {


   return [
      cls,
      ...additional,
      ...Object.entries(mods)
         .filter(([cls, value]) => Boolean(value))
         .map(([cls, value]) => cls)
   ]
      .join(' ')
}

// console.log(classNames('remove-btn', { hovered: true, selectable: true, red: false }, ['pdg']));

