import LOGO_FOOTER from "./images/logo-purple.png";
import FACEBOOK_ICON from "./images/Facebook.png";
import INSTAGRAM_ICON from "./images/Instagram.png";
import TWITTER_ICON from "./images/Twitter.png";
import YOUTUBE_ICON from "./images/Youtube.png";
import IMAGE_PLACEHOLDER from "./images/image-picture.png";
import SEARCH_ICON from "./images/Search.png";

const UserIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 20.0002V20.0002C5 17.5442 6.991 15.5532 9.447 15.5532H14.553C17.009 15.5532 19 17.5442 19 20.0002V20.0002"
      stroke="#646464"
      strokeWidth="1.482"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.0052 5.2448C16.6649 6.90453 16.6649 9.59548 15.0052 11.2552C13.3455 12.9149 10.6545 12.9149 8.9948 11.2552C7.33507 9.59548 7.33507 6.90453 8.9948 5.2448C10.6545 3.58507 13.3455 3.58507 15.0052 5.2448"
      stroke="#646464"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const NotificationIcon = (
  <svg
    width="17"
    height="20"
    viewBox="0 0 17 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_0_3272)">
      <path
        d="M0.000825903 11.7871V11.5681C0.0329459 10.9202 0.240596 10.2925 0.602356 9.7496C1.2045 9.0975 1.6167 8.2983 1.79571 7.43598C1.79571 6.7695 1.79571 6.0935 1.85393 5.42703C2.15469 2.21842 5.32728 0 8.4611 0H8.5387C11.6725 0 14.845 2.21842 15.1555 5.42703C15.2137 6.0935 15.1555 6.7695 15.204 7.43598C15.3854 8.3003 15.7972 9.1019 16.3974 9.7591C16.7618 10.2972 16.9698 10.9227 16.9989 11.5681V11.7776C17.0206 12.648 16.7208 13.4968 16.1548 14.1674C15.407 14.9515 14.3921 15.4393 13.3024 15.5384C10.107 15.8812 6.883 15.8812 3.68762 15.5384C2.59914 15.435 1.58576 14.9479 0.835206 14.1674C0.277996 13.4963 -0.0177641 12.6526 0.000825903 11.7871Z"
        stroke="#646464"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.05505 18.8521C6.55432 19.4787 7.28752 19.8843 8.09232 19.979C8.89722 20.0737 9.70732 19.8498 10.3434 19.3567C10.539 19.2109 10.715 19.0413 10.8673 18.8521"
        stroke="#646464"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_0_3272">
        <rect width="17" height="20.0002" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const MessageIcon = (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.92887 10.5459L7.39854 10.0156L7.3982 10.0159L7.92887 10.5459ZM7.9734 11.0762C8.26648 11.3689 8.74135 11.3686 9.03406 11.0756C9.32677 10.7825 9.32647 10.3076 9.03339 10.0149L7.9734 11.0762ZM12.7129 10.5459L12.1825 10.0156L12.1822 10.0159L12.7129 10.5459ZM12.7574 11.0762C13.0505 11.3689 13.5254 11.3686 13.8181 11.0756C14.1108 10.7825 14.1105 10.3076 13.8174 10.0149L12.7574 11.0762ZM7.97339 11.0762C7.83906 10.9421 7.83893 10.7244 7.97308 10.5901L9.03441 11.6501C9.48566 11.1983 9.48521 10.4662 9.03338 10.0149L7.97339 11.0762ZM7.97308 10.5901C8.10725 10.4558 8.3249 10.4556 8.45922 10.5898L7.39923 11.6511C7.85105 12.1024 8.58315 12.1019 9.03441 11.6501L7.97308 10.5901ZM8.45922 10.5898C8.59355 10.7239 8.59368 10.9416 8.45953 11.0759L7.3982 10.0159C6.94695 10.4678 6.9474 11.1998 7.39923 11.6511L8.45922 10.5898ZM8.4592 11.0763C8.45925 11.0762 8.45931 11.0761 8.45937 11.0761C8.45943 11.076 8.45949 11.076 8.45956 11.0759L7.3989 10.0152C7.39884 10.0153 7.39878 10.0153 7.39872 10.0154C7.39867 10.0155 7.3986 10.0155 7.39854 10.0156L8.4592 11.0763ZM8.45922 11.0762C8.32502 11.2103 8.10761 11.2103 7.9734 11.0762L9.03339 10.0149C8.58197 9.56404 7.85066 9.56404 7.39923 10.0149L8.45922 11.0762ZM12.7574 11.0762C12.6231 10.9421 12.6229 10.7244 12.7571 10.5901L13.8184 11.6501C14.2697 11.1983 14.2692 10.4662 13.8174 10.0149L12.7574 11.0762ZM12.7571 10.5901C12.8912 10.4558 13.1089 10.4556 13.2432 10.5898L12.1832 11.6511C12.6351 12.1024 13.3671 12.1019 13.8184 11.6501L12.7571 10.5901ZM13.2432 10.5898C13.3776 10.7239 13.3777 10.9416 13.2435 11.0759L12.1822 10.0159C11.7309 10.4678 11.7314 11.1998 12.1832 11.6511L13.2432 10.5898ZM13.2432 11.0763C13.2433 11.0762 13.2433 11.0761 13.2434 11.0761C13.2434 11.076 13.2435 11.076 13.2436 11.0759L12.1829 10.0152C12.1828 10.0153 12.1828 10.0153 12.1827 10.0154C12.1827 10.0155 12.1826 10.0155 12.1825 10.0156L13.2432 11.0763ZM13.2432 11.0762C13.109 11.2103 12.8916 11.2103 12.7574 11.0762L13.8174 10.0149C13.366 9.56404 12.6347 9.56404 12.1832 10.0149L13.2432 11.0762Z"
      fill="#646464"
    />
    <path
      d="M22.742 6.67552V14.9598V14.9597C22.7426 16.8599 21.2027 18.4009 19.3025 18.4015V18.4015H14.0764L8.65969 22.7349V18.4015H6.68261V18.4015C4.78238 18.4015 3.24194 16.8611 3.24194 14.9609V14.9609V6.67553V6.67553C3.24194 4.7753 4.78237 3.23486 6.68261 3.23486H19.3013V3.23486C21.2015 3.23486 22.742 4.77529 22.742 6.67553V6.67552Z"
      stroke="#646464"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.4167 14.083H16.25"
      stroke="#646464"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const downloadArrow = (
  <svg
    width="12"
    height="16"
    viewBox="0 0 12 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.25002 15C5.25002 15.4142 5.58581 15.75 6.00002 15.75C6.41424 15.75 6.75002 15.4142 6.75002 15H5.25002ZM6.75002 1C6.75002 0.585786 6.41424 0.25 6.00002 0.25C5.58581 0.25 5.25002 0.585786 5.25002 1H6.75002ZM11.5314 10.5293C11.8242 10.2364 11.8242 9.76156 11.5314 9.46867C11.2385 9.17578 10.7636 9.17578 10.4707 9.46867L11.5314 10.5293ZM6.00002 15L5.46969 15.5303C5.76259 15.8232 6.23746 15.8232 6.53035 15.5303L6.00002 15ZM1.52935 9.46867C1.23646 9.17578 0.761587 9.17578 0.468693 9.46867C0.1758 9.76156 0.1758 10.2364 0.468693 10.5293L1.52935 9.46867ZM6.75002 15V1H5.25002V15H6.75002ZM10.4707 9.46867L5.46969 14.4697L6.53035 15.5303L11.5314 10.5293L10.4707 9.46867ZM6.53035 14.4697L1.52935 9.46867L0.468693 10.5293L5.46969 15.5303L6.53035 14.4697Z"
      fill="white"
    />
  </svg>
);

const printerIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.064 8C16.064 8.41421 16.3998 8.75 16.814 8.75C17.2282 8.75 17.564 8.41421 17.564 8H16.064ZM6.43604 8C6.43604 8.41421 6.77182 8.75 7.18604 8.75C7.60025 8.75 7.93604 8.41421 7.93604 8H6.43604ZM17 10.25C16.5858 10.25 16.25 10.5858 16.25 11C16.25 11.4142 16.5858 11.75 17 11.75V10.25ZM18 11.75C18.4142 11.75 18.75 11.4142 18.75 11C18.75 10.5858 18.4142 10.25 18 10.25V11.75ZM17.564 8V4H16.064V8H17.564ZM17.564 4C17.564 3.03379 16.7802 2.25 15.814 2.25V3.75C15.9518 3.75 16.064 3.86221 16.064 4H17.564ZM15.814 2.25H8.18604V3.75H15.814V2.25ZM8.18604 2.25C7.21982 2.25 6.43604 3.03379 6.43604 4H7.93604C7.93604 3.86221 8.04825 3.75 8.18604 3.75V2.25ZM6.43604 4V8H7.93604V4H6.43604ZM17 11.75H18V10.25H17V11.75Z"
      fill="white"
    />
    <path
      d="M7 17H4C3.448 17 3 16.552 3 16V9C3 8.448 3.448 8 4 8H20C20.552 8 21 8.448 21 9V16C21 16.552 20.552 17 20 17H17"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 21H8C7.448 21 7 20.552 7 20V14H17V20C17 20.552 16.552 21 16 21Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const personalInfoIcon = (
  <svg
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.98438 17.043C8.22135 17.694 9.39323 18.0195 10.5 18.0195C11.6068 18.0195 12.7624 17.694 13.9668 17.043C15.2038 16.3919 16.1315 15.5944 16.75 14.6504C16.7174 13.7389 15.985 12.974 14.5527 12.3555C13.1204 11.737 11.7695 11.4277 10.5 11.4277C9.23047 11.4277 7.87956 11.737 6.44727 12.3555C5.01497 12.9414 4.28255 13.7064 4.25 14.6504C4.86849 15.5944 5.77995 16.3919 6.98438 17.043ZM12.6973 4.15234C12.0788 3.53385 11.3464 3.22461 10.5 3.22461C9.65365 3.22461 8.92122 3.53385 8.30273 4.15234C7.68424 4.77083 7.375 5.50326 7.375 6.34961C7.375 7.19596 7.68424 7.92839 8.30273 8.54688C8.92122 9.16536 9.65365 9.47461 10.5 9.47461C11.3464 9.47461 12.0788 9.16536 12.6973 8.54688C13.3158 7.92839 13.625 7.19596 13.625 6.34961C13.625 5.50326 13.3158 4.77083 12.6973 4.15234ZM3.12695 3.17578C5.17773 1.125 7.63542 0.0996094 10.5 0.0996094C13.3646 0.0996094 15.806 1.125 17.8242 3.17578C19.875 5.19401 20.9004 7.63542 20.9004 10.5C20.9004 13.3646 19.875 15.8223 17.8242 17.873C15.806 19.8913 13.3646 20.9004 10.5 20.9004C7.63542 20.9004 5.17773 19.8913 3.12695 17.873C1.10872 15.8223 0.0996094 13.3646 0.0996094 10.5C0.0996094 7.63542 1.10872 5.19401 3.12695 3.17578Z"
      fill="#70D8E7"
    />
  </svg>
);

const loginDetailsIcon = (
  <svg
    width="19"
    height="23"
    viewBox="0 0 19 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.5 0.0253906L18.875 4.22461V10.4746C18.875 13.3717 17.9798 16.0247 16.1895 18.4336C14.3991 20.8099 12.1693 22.3236 9.5 22.9746C6.83073 22.3236 4.60091 20.8099 2.81055 18.4336C1.02018 16.0247 0.125 13.3717 0.125 10.4746V4.22461L9.5 0.0253906ZM9.5 11.5V20.8262C11.4206 20.2077 13.0482 19.0521 14.3828 17.3594C15.7174 15.6341 16.515 13.681 16.7754 11.5H9.5ZM9.5 11.5V2.32031L2.22461 5.54297V11.5H9.5Z"
      fill="#3A3335"
    />
  </svg>
);

const dashboardIcon = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.032 4.3254e-07H13.968C13.5294 -9.56746e-06 13.1509 -1.95671e-05 12.8376 0.0213504C12.5078 0.0438604 12.1779 0.0933604 11.852 0.22836C11.1169 0.53285 10.5328 1.11687 10.2284 1.85195C10.0934 2.17788 10.0439 2.50779 10.0214 2.83762C10 3.15087 10 3.52934 10 3.96797V6.03199C10 6.47062 10 6.84914 10.0214 7.1624C10.0439 7.4922 10.0934 7.8221 10.2284 8.1481C10.5328 8.8831 11.1169 9.4672 11.852 9.7716C12.1779 9.9066 12.5078 9.9561 12.8376 9.9787C13.1509 10 13.5293 10 13.968 10H14.032C14.4706 10 14.8491 10 15.1624 9.9787C15.4922 9.9561 15.8221 9.9066 16.1481 9.7716C16.8831 9.4672 17.4672 8.8831 17.7716 8.1481C17.9066 7.8221 17.9561 7.4922 17.9787 7.1624C18 6.84913 18 6.47064 18 6.03199V3.96801C18 3.52936 18 3.15088 17.9787 2.83762C17.9561 2.50779 17.9066 2.17788 17.7716 1.85195C17.4672 1.11687 16.8831 0.53285 16.1481 0.22836C15.8221 0.0933604 15.4922 0.0438604 15.1624 0.0213504C14.8491 -1.95671e-05 14.4706 -9.56746e-06 14.032 4.3254e-07ZM12.6173 2.07612C12.6589 2.05889 12.7458 2.03227 12.9738 2.01671C13.2107 2.00054 13.5204 2 14 2C14.4796 2 14.7893 2.00054 15.0262 2.01671C15.2542 2.03227 15.3411 2.05889 15.3827 2.07612C15.6277 2.17762 15.8224 2.37229 15.9239 2.61732C15.9411 2.65893 15.9677 2.74576 15.9833 2.97376C15.9995 3.21074 16 3.52038 16 4V6C16 6.47963 15.9995 6.78926 15.9833 7.0262C15.9677 7.2542 15.9411 7.3411 15.9239 7.3827C15.8224 7.6277 15.6277 7.8224 15.3827 7.9239C15.3411 7.9411 15.2542 7.9677 15.0262 7.9833C14.7893 7.9995 14.4796 8 14 8C13.5204 8 13.2107 7.9995 12.9738 7.9833C12.7458 7.9677 12.6589 7.9411 12.6173 7.9239C12.3723 7.8224 12.1776 7.6277 12.0761 7.3827C12.0589 7.3411 12.0323 7.2542 12.0167 7.0262C12.0005 6.78926 12 6.47963 12 6V4C12 3.52038 12.0005 3.21074 12.0167 2.97376C12.0323 2.74576 12.0589 2.65893 12.0761 2.61732C12.1776 2.37229 12.3723 2.17762 12.6173 2.07612Z"
      fill="#646464"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.03199 8H3.96802C3.52937 8 3.15088 8 2.83762 8.0214C2.50779 8.0439 2.17788 8.0934 1.85195 8.2284C1.11687 8.5328 0.53285 9.1169 0.22836 9.852C0.0933604 10.1779 0.0438604 10.5078 0.0213504 10.8376C-1.95671e-05 11.1509 -9.56746e-06 11.5293 4.3254e-07 11.968V14.032C-9.56746e-06 14.4706 -1.95671e-05 14.8491 0.0213504 15.1624C0.0438604 15.4922 0.0933604 15.8221 0.22836 16.1481C0.53285 16.8831 1.11687 17.4672 1.85195 17.7716C2.17788 17.9066 2.50779 17.9561 2.83762 17.9787C3.15088 18 3.52936 18 3.96801 18H4.03199C4.47064 18 4.84913 18 5.16238 17.9787C5.49221 17.9561 5.82212 17.9066 6.14805 17.7716C6.88314 17.4672 7.4672 16.8831 7.7716 16.1481C7.9066 15.8221 7.9561 15.4922 7.9787 15.1624C8 14.8491 8 14.4707 8 14.032V11.968C8 11.5294 8 11.1509 7.9787 10.8376C7.9561 10.5078 7.9066 10.1779 7.7716 9.852C7.4672 9.1169 6.88314 8.5328 6.14805 8.2284C5.82212 8.0934 5.49221 8.0439 5.16238 8.0214C4.84913 8 4.47064 8 4.03199 8ZM2.61732 10.0761C2.65893 10.0589 2.74576 10.0323 2.97376 10.0167C3.21074 10.0005 3.52038 10 4 10C4.47963 10 4.78926 10.0005 5.02624 10.0167C5.25424 10.0323 5.34107 10.0589 5.38269 10.0761C5.62771 10.1776 5.82239 10.3723 5.92388 10.6173C5.94112 10.6589 5.96774 10.7458 5.98329 10.9738C5.99946 11.2107 6 11.5204 6 12V14C6 14.4796 5.99946 14.7893 5.98329 15.0262C5.96774 15.2542 5.94112 15.3411 5.92388 15.3827C5.82239 15.6277 5.62771 15.8224 5.38269 15.9239C5.34107 15.9411 5.25424 15.9677 5.02624 15.9833C4.78926 15.9995 4.47963 16 4 16C3.52038 16 3.21074 15.9995 2.97376 15.9833C2.74576 15.9677 2.65893 15.9411 2.61732 15.9239C2.37229 15.8224 2.17762 15.6277 2.07612 15.3827C2.05889 15.3411 2.03227 15.2542 2.01671 15.0262C2.00054 14.7893 2 14.4796 2 14V12C2 11.5204 2.00054 11.2107 2.01671 10.9738C2.03227 10.7458 2.05889 10.6589 2.07612 10.6173C2.17762 10.3723 2.37229 10.1776 2.61732 10.0761Z"
      fill="#646464"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 0C1.34315 0 0 1.34315 0 3C0 4.65685 1.34315 6 3 6H5C6.65685 6 8 4.65685 8 3C8 1.34315 6.65685 0 5 0H3ZM2 3C2 2.44772 2.44772 2 3 2H5C5.55228 2 6 2.44772 6 3C6 3.55228 5.55228 4 5 4H3C2.44772 4 2 3.55228 2 3Z"
      fill="#646464"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 12C11.3431 12 10 13.3431 10 15C10 16.6569 11.3431 18 13 18H15C16.6569 18 18 16.6569 18 15C18 13.3431 16.6569 12 15 12H13ZM12 15C12 14.4477 12.4477 14 13 14H15C15.5523 14 16 14.4477 16 15C16 15.5523 15.5523 16 15 16H13C12.4477 16 12 15.5523 12 15Z"
      fill="#646464"
    />
  </svg>
);

const frontDeskIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.5 7.5V8.25H8.50027L8.5 7.5ZM5.5 7.5L5.49973 8.25H5.5V7.5ZM4.5 6.5H3.75L3.75 6.50027L4.5 6.5ZM4.5 5.5L3.75 5.49973V5.5H4.5ZM5.5 4.5V3.75L5.49973 3.75L5.5 4.5ZM8.5 4.5L8.50027 3.75H8.5V4.5ZM9.5 5.5H10.25V5.49973L9.5 5.5ZM9.5 6.5L10.25 6.50027V6.5H9.5ZM12 14.5V15.25C12.4142 15.25 12.75 14.9142 12.75 14.5H12ZM4 14.5H3.25C3.25 14.9142 3.58579 15.25 4 15.25V14.5ZM8.5 6.75H5.5V8.25H8.5V6.75ZM5.50027 6.75C5.36207 6.74995 5.25005 6.63793 5.25 6.49973L3.75 6.50027C3.75035 7.46647 4.53353 8.24965 5.49973 8.25L5.50027 6.75ZM5.25 6.5V5.5H3.75V6.5H5.25ZM5.25 5.50027C5.25005 5.36207 5.36207 5.25005 5.50027 5.25L5.49973 3.75C4.53353 3.75035 3.75035 4.53353 3.75 5.49973L5.25 5.50027ZM5.5 5.25H8.5V3.75H5.5V5.25ZM8.49973 5.25C8.63793 5.25005 8.74995 5.36207 8.75 5.50027L10.25 5.49973C10.2497 4.53353 9.46647 3.75035 8.50027 3.75L8.49973 5.25ZM8.75 5.5V6.5H10.25V5.5H8.75ZM8.75 6.49973C8.74995 6.63793 8.63793 6.74995 8.49973 6.75L8.50027 8.25C9.46647 8.24965 10.2497 7.46647 10.25 6.50027L8.75 6.49973ZM5 10.75H11V9.25H5V10.75ZM11 10.75C11.1381 10.75 11.25 10.8619 11.25 11H12.75C12.75 10.0335 11.9665 9.25 11 9.25V10.75ZM11.25 11V14.5H12.75V11H11.25ZM12 13.75H4V15.25H12V13.75ZM4.75 14.5V11H3.25V14.5H4.75ZM4.75 11C4.75 10.8619 4.86193 10.75 5 10.75V9.25C4.03351 9.25 3.25 10.0335 3.25 11H4.75Z"
      fill="#646464"
    />
    <path
      d="M7 7.5V10"
      stroke="#646464"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 9.2501C14.5858 9.2501 14.25 9.58588 14.25 10.0001C14.25 10.4143 14.5858 10.7501 15 10.7501V9.2501ZM18 10.0001L18.0021 9.2501H18V10.0001ZM19.25 12.0022C19.2512 12.4165 19.5879 12.7513 20.0021 12.7501C20.4164 12.7489 20.7512 12.4122 20.75 11.998L19.25 12.0022ZM16.3928 7.5001L16.4161 6.75046C16.4049 6.75011 16.3936 6.75001 16.3823 6.75017L16.3928 7.5001ZM14.7808 6.57192L15.4347 6.20453C15.4294 6.19506 15.4239 6.1857 15.4181 6.17647L14.7808 6.57192ZM15.0624 4.0944L15.5947 4.62278L15.5947 4.62277L15.0624 4.0944ZM17.5378 3.7946L17.1471 4.43476L17.1471 4.43477L17.5378 3.7946ZM18.4027 6.13326L19.1085 6.3871C19.1111 6.37982 19.1136 6.3725 19.116 6.36514L18.4027 6.13326ZM3 21.0001H2.25C2.25 21.4143 2.58579 21.7501 3 21.7501V21.0001ZM21 21.0001V21.7501C21.4142 21.7501 21.75 21.4143 21.75 21.0001H21ZM15 10.7501H18V9.2501H15V10.7501ZM17.9979 10.7501C18.6886 10.7521 19.248 11.3115 19.25 12.0022L20.75 11.998C20.7457 10.4822 19.5179 9.25443 18.0021 9.2501L17.9979 10.7501ZM16.3823 6.75017C15.9903 6.75566 15.6267 6.54631 15.4347 6.20453L14.127 6.9393C14.5883 7.76029 15.4617 8.26321 16.4033 8.25002L16.3823 6.75017ZM15.4181 6.17647C15.1102 5.68016 15.1832 5.03732 15.5947 4.62278L14.5302 3.56602C13.6293 4.47353 13.4693 5.88083 14.1436 6.96737L15.4181 6.17647ZM15.5947 4.62277C16.0062 4.20823 16.6485 4.13044 17.1471 4.43476L17.9286 3.15443C16.8371 2.48821 15.431 2.6585 14.5302 3.56602L15.5947 4.62277ZM17.1471 4.43477C17.6457 4.73908 17.8701 5.34589 17.6895 5.90138L19.116 6.36514C19.5113 5.14907 19.02 3.82063 17.9286 3.15443L17.1471 4.43477ZM17.697 5.87942C17.5038 6.41657 16.9867 6.76822 16.4161 6.75046L16.3695 8.24973C17.5896 8.28771 18.6953 7.53573 19.1085 6.3871L17.697 5.87942ZM3 21.7501H21V20.2501H3V21.7501ZM21.75 21.0001V15.5001H20.25V21.0001H21.75ZM21.75 15.5001C21.75 14.5336 20.9665 13.7501 20 13.7501V15.2501C20.1381 15.2501 20.25 15.362 20.25 15.5001H21.75ZM20 13.7501H4V15.2501H20V13.7501ZM4 13.7501C3.03351 13.7501 2.25 14.5336 2.25 15.5001H3.75C3.75 15.362 3.86193 15.2501 4 15.2501V13.7501ZM2.25 15.5001V21.0001H3.75V15.5001H2.25Z"
      fill="#646464"
    />
  </svg>
);

const reservationIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="3"
      y="4.5"
      width="18"
      height="16.5"
      rx="3"
      stroke="#646464"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 16.9858H7"
      stroke="#646464"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.5 3V6"
      stroke="#646464"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.5 3V6"
      stroke="#646464"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const guestIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 16.25C8.58579 16.25 8.25 16.5858 8.25 17C8.25 17.4142 8.58579 17.75 9 17.75V16.25ZM15 17.75C15.4142 17.75 15.75 17.4142 15.75 17C15.75 16.5858 15.4142 16.25 15 16.25V17.75ZM13.9445 10.0555C13.6516 9.76256 13.1768 9.76256 12.8839 10.0555C12.591 10.3484 12.591 10.8232 12.8839 11.1161L13.9445 10.0555ZM12.8839 11.1161C13.1768 11.409 13.6516 11.409 13.9445 11.1161C14.2374 10.8232 14.2374 10.3484 13.9445 10.0555L12.8839 11.1161ZM9 17.75H15V16.25H9V17.75ZM12.8839 11.1161C13.372 11.6043 13.372 12.3957 12.8839 12.8839L13.9445 13.9445C15.0185 12.8706 15.0185 11.1294 13.9445 10.0555L12.8839 11.1161ZM12.8839 12.8839C12.3957 13.372 11.6043 13.372 11.1161 12.8839L10.0554 13.9445C11.1294 15.0185 12.8706 15.0185 13.9445 13.9445L12.8839 12.8839ZM11.1161 12.8839C10.6279 12.3957 10.6279 11.6043 11.1161 11.1161L10.0554 10.0555C8.9815 11.1294 8.9815 12.8706 10.0554 13.9445L11.1161 12.8839ZM11.1161 11.1161C11.6043 10.628 12.3957 10.628 12.8839 11.1161L13.9445 10.0555C12.8706 8.98151 11.1294 8.98151 10.0554 10.0555L11.1161 11.1161Z"
      fill="#646464"
    />
    <path
      d="M5 6.02234H17C18.105 6.02234 19 6.91734 19 8.02234V20.0003C19 21.1003 18.1 22.0003 17 22.0003H7C5.895 22.0003 5 21.1053 5 20.0003V6.02234C5 5.60634 5.258 5.23334 5.647 5.08634L13.647 2.06534C14.301 1.81834 15 2.30234 15 3.00134V6.02234"
      stroke="#646464"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const roomIcon = (
  <svg
    width="13"
    height="22"
    viewBox="0 0 13 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.88 11.825L7.728 8.8V8.8C8.52057 8.30428 9.00141 7.43483 9 6.5V6.5V6.5C9 5.11929 7.88071 4 6.5 4V4V4C5.11929 4 4 5.11929 4 6.5V6.5V6.5V6.5C4 7.32843 3.32843 8 2.5 8V8V8V8C1.67157 8 1 7.32843 1 6.5V6.5V6.5C1 3.46243 3.46243 1 6.5 1V1V1V1C9.53757 1 12 3.46243 12 6.5V6.5V19V19C12 20.1046 11.1046 21 10 21H3V21C1.89543 21 1 20.1046 1 19V19V15.217V15.217C1 13.8378 1.71048 12.556 2.88001 11.825L2.88 11.825Z"
      stroke="#646464"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.17213 15.1108L6.39412 16.8888L5.32812 15.8218"
      stroke="#646464"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const reportIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 12V12C21 16.971 16.971 21 12 21V21C7.029 21 3 16.971 3 12V12C3 7.029 7.029 3 12 3V3C16.971 3 21 7.029 21 12Z"
      stroke="#646464"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.8337 18.8943C18.1266 19.1872 18.6014 19.1872 18.8943 18.8943C19.1872 18.6014 19.1872 18.1266 18.8943 17.8337L17.8337 18.8943ZM12.293 12.293L12.8233 11.7627L12.293 12.293ZM12.75 3C12.75 2.58579 12.4142 2.25 12 2.25C11.5858 2.25 11.25 2.58579 11.25 3H12.75ZM11.6948 11.3106C11.3362 11.5178 11.2134 11.9765 11.4206 12.3352C11.6278 12.6938 12.0865 12.8166 12.4452 12.6094L11.6948 11.3106ZM20.1652 8.14942C20.5238 7.94221 20.6466 7.48348 20.4394 7.12482C20.2322 6.76616 19.7735 6.64338 19.4148 6.85058L20.1652 8.14942ZM18.8943 17.8337L12.8233 11.7627L11.7627 12.8233L17.8337 18.8943L18.8943 17.8337ZM12.8233 11.7627C12.776 11.7154 12.75 11.6521 12.75 11.586H11.25C11.25 12.0499 11.434 12.4946 11.7627 12.8233L12.8233 11.7627ZM12.75 11.586V3H11.25V11.586H12.75ZM12.4452 12.6094L20.1652 8.14942L19.4148 6.85058L11.6948 11.3106L12.4452 12.6094Z"
      fill="#646464"
    />
  </svg>
);

const paymentIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 19H4C2.895 19 2 18.105 2 17V7C2 5.895 2.895 5 4 5H20C21.105 5 22 5.895 22 7V17C22 18.105 21.105 19 20 19Z"
      stroke="#646464"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.2981 9.7019C14.0052 9.40901 13.5304 9.40901 13.2375 9.7019C12.9446 9.9948 12.9446 10.4697 13.2375 10.7626L14.2981 9.7019ZM13.2375 10.7626C13.5304 11.0555 14.0052 11.0555 14.2981 10.7626C14.591 10.4697 14.591 9.9948 14.2981 9.7019L13.2375 10.7626ZM6.75 9.50003C6.75 9.08582 6.41421 8.75003 6 8.75003C5.58579 8.75003 5.25 9.08582 5.25 9.50003H6.75ZM5.25 14.5C5.25 14.9142 5.58579 15.25 6 15.25C6.41421 15.25 6.75 14.9142 6.75 14.5H5.25ZM18.75 9.50003C18.75 9.08582 18.4142 8.75003 18 8.75003C17.5858 8.75003 17.25 9.08582 17.25 9.50003H18.75ZM17.25 14.5C17.25 14.9142 17.5858 15.25 18 15.25C18.4142 15.25 18.75 14.9142 18.75 14.5H17.25ZM13.2375 10.7626C13.9209 11.446 13.9209 12.554 13.2375 13.2374L14.2981 14.2981C15.5673 13.0289 15.5673 10.9711 14.2981 9.7019L13.2375 10.7626ZM13.2375 13.2374C12.5541 13.9208 11.446 13.9208 10.7626 13.2374L9.70194 14.2981C10.9711 15.5673 13.0289 15.5673 14.2981 14.2981L13.2375 13.2374ZM10.7626 13.2374C10.0792 12.554 10.0792 11.446 10.7626 10.7626L9.70194 9.7019C8.43274 10.9711 8.43274 13.0289 9.70194 14.2981L10.7626 13.2374ZM10.7626 10.7626C11.446 10.0791 12.5541 10.0791 13.2375 10.7626L14.2981 9.7019C13.0289 8.4327 10.9711 8.4327 9.70194 9.7019L10.7626 10.7626ZM5.25 9.50003V14.5H6.75V9.50003H5.25ZM17.25 9.50003V14.5H18.75V9.50003H17.25Z"
      fill="#646464"
    />
  </svg>
);

const settingIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.8001 3V3C13.222 3.00006 13.5985 3.26492 13.7411 3.662L14.2491 5.077V5.077C14.3298 5.29951 14.4863 5.48647 14.6911 5.605L16.1981 6.475V6.475C16.4028 6.59307 16.6426 6.63488 16.8751 6.593L18.3551 6.326V6.326C18.7707 6.25043 19.189 6.44415 19.4001 6.81L20.2001 8.19V8.19C20.4118 8.55486 20.3718 9.01333 20.1001 9.336L19.1291 10.484V10.484C18.9762 10.6645 18.8922 10.8934 18.8921 11.13V12.87V12.87C18.8922 13.1065 18.9762 13.3354 19.1291 13.516L20.1001 14.664V14.664C20.3718 14.9866 20.4118 15.4451 20.2001 15.81L19.4001 17.19V17.19C19.1891 17.5554 18.7713 17.7491 18.3561 17.674L16.8761 17.407V17.407C16.6436 17.3651 16.4037 17.4069 16.1991 17.525L14.6921 18.395V18.395C14.4872 18.5135 14.3307 18.7005 14.2501 18.923L13.7421 20.338V20.338C13.5994 20.7354 13.2224 21.0003 12.8001 21H11.2001V21C10.7782 20.9999 10.4017 20.7351 10.2591 20.338L9.75111 18.923V18.923C9.6705 18.7008 9.51442 18.5139 9.31011 18.395L7.80211 17.525V17.525C7.59747 17.4069 7.35764 17.3651 7.12512 17.407L5.64512 17.674V17.674C5.22952 17.7496 4.81127 17.5558 4.60012 17.19L3.80012 15.81V15.81C3.58841 15.4451 3.62841 14.9867 3.90012 14.664L4.87112 13.516V13.516C5.02405 13.3355 5.10803 13.1066 5.10812 12.87V11.13V11.13C5.10804 10.8935 5.02408 10.6646 4.87115 10.484L3.91011 9.336V9.336C3.6384 9.01333 3.5984 8.55486 3.81011 8.19L4.61011 6.81V6.81C4.82113 6.44454 5.23885 6.25089 5.65411 6.326L7.1341 6.593V6.593C7.36662 6.63488 7.60647 6.59307 7.81111 6.475L9.31911 5.605V5.605C9.52342 5.48609 9.6795 5.29923 9.76011 5.077L10.2681 3.662V3.662C10.4096 3.26801 10.7815 3.00384 11.2001 3L12.8001 3Z"
      stroke="#646464"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="12"
      cy="12"
      r="2.75"
      stroke="#646464"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export {
  LOGO_FOOTER,
  FACEBOOK_ICON,
  INSTAGRAM_ICON,
  TWITTER_ICON,
  YOUTUBE_ICON,
  IMAGE_PLACEHOLDER,
  SEARCH_ICON,
  // svgs

  UserIcon,
  NotificationIcon,
  MessageIcon,
  downloadArrow,
  printerIcon,
  personalInfoIcon,
  loginDetailsIcon,
  dashboardIcon,
  frontDeskIcon,
  reservationIcon,
  guestIcon,
  roomIcon,
  reportIcon,
  paymentIcon,
  settingIcon,
};
