import { getAppStoreUrl, getPlayStoreUrl } from '../appLinks';

export default function DownloadApp() {
  return (
    <section id="download-app" className="download-app-section">
      <div className="download-app-inner">
        <div className="download-app-left">
          <h2 className="download-app-title">Download the app</h2>
          <div className="store-badges">
            <a href={getAppStoreUrl()} className="store-badge-link" aria-label="Download on the App Store">
              <img
                src="/apple_badge.svg"
                alt="Download on the App Store"
                className="store-badge store-badge--hero"
              />
            </a>
            <a href={getPlayStoreUrl()} className="store-badge-link" aria-label="Get it on Google Play">
              <img
                src="/google_badge.svg"
                alt="Get it on Google Play"
                className="store-badge store-badge--hero"
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
