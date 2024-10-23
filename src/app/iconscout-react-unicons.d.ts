declare module '@iconscout/react-unicons' {
    import { FC, SVGProps } from 'react';
    
    export interface IconProps extends SVGProps<SVGElement> {
      size?: string | number;
      color?: string;
    }
  
    export const UilRobot: FC<IconProps>;
    export const UilModem: FC<IconProps>;
    export const UilShield: FC<IconProps>;
    export const UilShoppingCart: FC<IconProps>;
    export const UilDatabase: FC<IconProps>;
    export const UilMobileAndroid: FC<IconProps>;
    export const UilCloud: FC<IconProps>;
    export const UilChartGrowth: FC<IconProps>;
    export const UilTwitter: FC<IconProps>;
    export const UilLinkedin: FC<IconProps>;
    export const UilEnvelope: FC<IconProps>;
    export const UilArrowRight: FC<IconProps>;
    export const UilAngleRight: FC<IconProps>;
    export const UilMapMarker: FC<IconProps>;
    export const UilPhone: FC<IconProps>;
    export const UilClock: FC<IconProps>;
    export const UilFacebook: FC<IconProps>;
    export const UilInstagram: FC<IconProps>;
    export const UilYoutube: FC<IconProps>;
    export const UilGithub: FC<IconProps>;
  }