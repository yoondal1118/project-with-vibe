import { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle?: { [key: string]: unknown }[];
  }
}

interface AdBannerProps {
  adSlot: string; // 광고 단위 ID를 props로 받습니다.
}

const AdBanner: React.FC<AdBannerProps> = ({ adSlot }) => {
  useEffect(() => {
    try {
      if (window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error("AdSense script error:", err);
    }
  }, [adSlot]); // adSlot이 변경되면 다시 로드

  return (
    <div className="ad-banner-container">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-8732015423087148" // 사용자 게시자 ID
        data-ad-slot={adSlot} // ★★★ 중요: 이 값을 당신의 광고 단위 ID로 교체하세요. ★★★
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdBanner;
