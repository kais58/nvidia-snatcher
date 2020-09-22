import {Store} from './store';

export const Scan: Store = {
	links: [
		{
			brand: 'asus',
			model: 'tuf',
			series: '3080',
			url: 'https://www.scan.co.uk/products/asus-nvidia-geforce-rtx-3080-10gb-tuf-gaming-ampere-graphics-card'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3080',
			url: 'https://www.scan.co.uk/products/asus-nvidia-geforce-rtx-3080-tuf-gaming-oc-10gb-gddr6x-ray-tracing-graphics-card'
		},
		{
			brand: 'evga',
			model: 'xc3 black gaming',
			series: '3080',
			url: 'https://www.scan.co.uk/products/evga-nvidia-geforce-rtx-3080-xc3-black-gaming-10gb-gddr6x-ray-tracing-graphics-card-8704-core-1440mh'
		},
                {
                        brand: 'evga',
                        model: 'xc3 gaming',
                        series: '3080',
                        url: 'https://www.scan.co.uk/products/evga-nvidia-geforce-rtx-3080-xc3-gaming-10gb-gddr6x-ray-tracing-graphics-card-8704-core-1440mhz-gpu'
                },
                {
                        brand: 'evga',
                        model: 'xc3 ultra',
                        series: '3080',
                        url: 'https://www.scan.co.uk/products/evga-nvidia-geforce-rtx-3080-xc3-ultra-gaming-10gb-gddr6x-ray-tracing-graphics-card-8704-core-1440mh'
                },
                {
                        brand: 'evga',
                        model: 'ftw3 gaming',
                        series: '3080',
                        url: 'https://www.scan.co.uk/products/evga-nvidia-geforce-rtx-3080-ftw3-gaming-10gb-gddr6x-ray-tracing-graphics-card-8704-core-1440mhz-gpu'
                },
                {
                        brand: 'evga',
                        model: 'ftw3 ultra',
                        series: '3080',
                        url: 'https://www.scan.co.uk/products/evga-nvidia-geforce-rtx-3080-ftw3-ultra-gaming-10gb-gddr6x-ray-tracing-graphics-card-8704-core-1440m'
                }
	],
	labels: {
		outOfStock: ['our pre-order promise']
	},
	name: 'scan'
};
