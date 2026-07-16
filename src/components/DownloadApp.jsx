import { getAppStoreUrl, getPlayStoreUrl } from '../appLinks';

export default function DownloadApp() {
  return (
    <section id="download-app" className="download-app-section">
      <div className="download-app-inner">
        <div className="download-app-left">
          <h2 className="download-app-title">Download the app</h2>
          <div className="download-app-badges">
            <a href={getAppStoreUrl()} className="download-app-badge-link" aria-label="Download on the App Store">
              <img
                src="/App_Store_Badge_US-UK_RGB.svg"
                alt="Download on the App Store"
                className="download-app-badge"
              />
            </a>
            <a href={getPlayStoreUrl()} className="download-app-badge-link" aria-label="Get it on Google Play">
              <img
                src="/GetItOnGooglePlay_Badge_Web_color_English.png"
                alt="Get it on Google Play"
                className="download-app-badge"
              />
            </a>
          </div>
        </div>
        <div className="download-app-right" aria-hidden="true">
          <img src="/celular_particial.png" alt="" className="download-app-phone" />
        </div>
      </div>
    </section>
  );
}
