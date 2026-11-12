'use client';

import { ArcGalleryHero } from '@/components/ui/arc-gallery-hero-component';

export default function DemoOne() {
  // An array of image URLs related to memories / showcase
  const memoryImages = [
    'https://cdn.21st.dev/assets/mirror/70/706df1e921d12b172a0f531bd7e376496acadd61faff14d909d8a02c81330ff6.jpg',
    'https://cdn.21st.dev/assets/mirror/f2/f205346f850085c841beb3a7ca6115bb8aaf8268992606812b207a1993c5769f.jpg',
    'https://cdn.21st.dev/assets/mirror/cf/cf273032d791a8a5d4c6579eae14a92438cdb4a0efb97ad3363d9a4e99b3cea2.jpg',
    'https://cdn.21st.dev/assets/mirror/ab/ab5b8c7b79915a038d1eb60c3b67468cafa0be6ad4525baf1f4904223f2b2c5d.jpg',
    'https://cdn.21st.dev/assets/mirror/60/60a7f8d08136b1422100d95f84edff22bfe37eadc5655023bab5d88158f7acfb.jpg',
    'https://cdn.21st.dev/assets/mirror/e9/e91ba427ad4aee72869842eb6bd37de4d0ec78e07be4c8ba9ba4266ed2f833ec.jpg',
    'https://cdn.21st.dev/assets/mirror/d9/d9980577799353c7dd153d43d99276acb67999f8d2d898f4326be59ce0ec0ced.jpg',
    'https://cdn.21st.dev/assets/mirror/92/92931de16fc02b8fe1d4a37b9c5fc044ff41c05503efd5b25f3ad3f4e9e4f0f3.jpg',
    'https://cdn.21st.dev/assets/mirror/ef/ef1586fd2e6679c8f96172c4308504b6ef4610332ee3ca468b242cb61b9788e2.jpg',
    'https://cdn.21st.dev/assets/mirror/73/734a64693f90f24f82a6950a3d4b69ee5991fc348444b91cb647bc9a253537ad.jpg',
    'https://cdn.21st.dev/assets/mirror/ed/ed77b585b4531d14b2a228904f42d14e01ad1ad2812a15f8441a08e7117d50b2.jpg',
    'https://cdn.21st.dev/assets/mirror/12/128a44d18db06f84d5f5497fe517e20542499146cf23574c8cb625374b93871d.jpg',
  ];

  return (
    <div className="w-full">
      <ArcGalleryHero images={memoryImages} />
    </div>
  );
}
