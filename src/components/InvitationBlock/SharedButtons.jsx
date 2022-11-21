import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  ViberShareButton,
  EmailShareButton,
} from 'react-share';

const ShareButtons = () => {
  return (
    <>
      <FacebookShareButton>f</FacebookShareButton>
      <TwitterShareButton>tw</TwitterShareButton>
      <TelegramShareButton>t</TelegramShareButton>
      <WhatsappShareButton>w</WhatsappShareButton>
      <ViberShareButton>vbr</ViberShareButton>
      <EmailShareButton>email</EmailShareButton>
    </>
  );
};

export default ShareButtons;
