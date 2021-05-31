import React from 'react';
import Logo from '@Assets/svg/logo.svg';
import Envelope from '@Assets/svg/envelop.svg';
import User from '@Assets/svg/user.svg';
import Password from '@Assets/svg/password.svg';
import UserGroup from '@Assets/svg/userGroup.svg';
import UserFilled from '@Assets/svg/userFilled.svg';
import Menu from '@Assets/svg/menu.svg';
import More from '@Assets/svg/more.svg';
import Location from '@Assets/svg/location.svg';
import Favourite from '@Assets/svg/favourite.svg';
import Compare from '@Assets/svg/compare.svg';
import Close from '@Assets/svg/close.svg';
import HighFive from '@Assets/svg/highFive.svg';
import Home from '@Assets/svg/home.svg';
import Calculator from '@Assets/svg/calculator.svg';
import Facebook from '@Assets/svg/facebook.svg';
import Twitter from '@Assets/svg/twitter.svg';
import Instagram from '@Assets/svg/instagram.svg';
import Google from '@Assets/svg/google.svg';
import Dribbble from '@Assets/svg/dribbble.svg';
import Pinterest from '@Assets/svg/pinterest.svg';
import ArrowDown from '@Assets/svg/arrowdown.svg';
import ArrowUp from '@Assets/svg/arrowup.svg';
import Tick from '@Assets/svg/tick.svg';
import Plus from '@Assets/svg/Plus.svg';
import Search from '@Assets/svg/search.svg';
import ArrowRight from '@Assets/svg/arrowright.svg';
import ArrowLeft from '@Assets/svg/arrowleft.svg';
import homeHeart from '@Assets/svg/homeHeart.svg';
import profitCalculator from '@Assets/svg/profitCalculator.svg';
import Star from '@Assets/svg/star.svg';
import LinkedIn from '@Assets/svg/linkedin.svg';
const IconMap = {
  logo: Logo,
  envelope: Envelope,
  user: User,
  password: Password,
  userGroup: UserGroup,
  userFilled: UserFilled,
  menu: Menu,
  more: More,
  location: Location,
  favourite: Favourite,
  compare: Compare,
  close: Close,
  highFive: HighFive,
  home: Home,
  calculator: Calculator,
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  pinterest: Pinterest,
  dribbble: Dribbble,
  google: Google,
  arrowDown: ArrowDown,
  arrowUp: ArrowUp,
  tick: Tick,
  plus: Plus,
  search: Search,
  arrowright: ArrowRight,
  arrowleft: ArrowLeft,
  homeheart: homeHeart,
  profitcalculator: profitCalculator,
  star: Star,
  linkedin: LinkedIn
};

export const SVGIcon = ({ name, width = 16, height = 16, ...rest }) => {
  const MatchIcon = IconMap[name] || null;
  // return null

  if (MatchIcon === null) return null;

  return <MatchIcon width={width} height={height} {...rest} />;
};
