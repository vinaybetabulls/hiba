import clsx from 'clsx';
import { default as NextLink } from 'next/link';
import React from 'react';
import { LinkProps } from '../../common/props';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import Highlighted from '../Highlighted/Highlighted';
import useStyles from './Link.styles';

type ForwardedLinkProps = {
  onClick?: () => void;
  href?: string;
};

const Link = (props: LinkProps) => {
  const {
    label,
    url,
    tabIndex,
    icon,
    iconPosition = 'left',
    iconFontSize,
    nofollow,
    noFollow,
    className,
    onClick,
    newWindow,
    button,
    variant,
    thin,
    highlightTextMatch,
    id,
  } = props;
  const classes = useStyles();

  const LinkChildren = () =>
    icon && iconPosition === 'top' ? (
      <Icon icon={icon} label={label} fontSize={iconFontSize} />
    ) : (
      <>
        {icon && iconPosition === 'left' && (
          <Icon
            icon={icon}
            fontSize={iconFontSize}
            className={classes.iconLeft}
          />
        )}
        <Highlighted text={label} highlight={highlightTextMatch} />
        {icon && iconPosition === 'right' && (
          <Icon
            icon={icon}
            fontSize={iconFontSize}
            className={classes.iconRight}
          />
        )}
      </>
    );

  const LinkContents = React.forwardRef<HTMLAnchorElement, ForwardedLinkProps>(
    ({ onClick, href }, ref) => (
      <a
        href={href}
        onClick={onClick}
        ref={ref}
        id={id}
        className={
          clsx(
            className,
            icon && iconPosition !== 'top' && classes.hasInlineIcon,
          ) || undefined
        }
        {...(tabIndex && { tabIndex })}
        {...((nofollow || noFollow) && { rel: 'nofollow' })}
        {...(newWindow && { target: '_blank' })}
      >
        {button && variant ? (
          <Button {...{ variant, thin, title: label, icon, id }} />
        ) : (
          <LinkChildren />
        )}
      </a>
    ),
  );

  LinkContents.displayName = 'LinkContents';

  return (
    <>
      {url ? (
        <NextLink href={url} passHref>
          <LinkContents onClick={onClick} />
        </NextLink>
      ) : onClick ? (
        <>
          {button && variant ? (
            <Button {...{ variant, thin, title: label, icon, onClick, id }} />
          ) : (
            <button
              {...(tabIndex && { tabIndex })}
              className={clsx(className, classes.linkButton)}
              onClick={onClick}
              type="button"
              id={id}
            >
              <LinkChildren />
            </button>
          )}
        </>
      ) : (
        <span
          id={id}
          className={clsx(
            className,
            icon && iconPosition !== 'top' && classes.hasInlineIcon,
            'no-link',
          )}
        >
          <LinkChildren />
        </span>
      )}
    </>
  );
};

export default Link;
