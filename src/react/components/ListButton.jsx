import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { useTheme } from '../shared/use-theme.js';
import { useThemeClasses } from '../shared/use-theme-classes.js';
import { useTouchRipple } from '../shared/use-touch-ripple.js';
import { ListButtonClasses } from '../../shared/classes/ListButtonClasses.js';

const ListButton = forwardRef((props, ref) => {
  const {
    component = 'li',
    className,
    colors: colorsProp,

    hairlines = true,

    // Link props
    href,
    target,

    // Button props
    type,
    value,

    linkComponent = 'a',
    linkProps = {},

    ios,
    material,

    touchRipple = true,

    // Children
    children,

    // Rest
    ...rest
  } = props;

  const elRef = useRef(null);
  const rippleElRef = useRef(null);

  useImperativeHandle(ref, () => ({
    el: elRef.current,
  }));

  const Component = component;

  const attrs = {
    ...rest,
  };

  const theme = useTheme({ ios, material });
  const themeClasses = useThemeClasses({ ios, material });

  useTouchRipple(rippleElRef, theme === 'material' && touchRipple);

  const colors = {
    text: 'text-primary',
    activeBg: 'active:bg-primary',
    touchRipple: 'touch-ripple-primary',
    ...colorsProp,
  };

  const c = themeClasses(
    ListButtonClasses({ ...props, hairlines }, colors, className),
    className
  );

  const isLink = !!href || href === '';
  const hrefComputed =
    !isLink || href === true || href === false ? undefined : href || '';
  const buttonAttrs = { href: hrefComputed, target, type, value, ...linkProps };

  const ButtonComponent = isLink ? linkComponent : 'button';

  return (
    <Component ref={elRef} className={c.base} {...attrs}>
      <ButtonComponent ref={rippleElRef} className={c.button} {...buttonAttrs}>
        {children}
      </ButtonComponent>
    </Component>
  );
});

ListButton.displayName = 'ListButton';

export default ListButton;
