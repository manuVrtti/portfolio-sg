/**
 * Studio Content Data
 * 
 * Custom content for Suyash's interactive monitor towers.
 */

export const PLATFORM_CONFIG = {
    youtube: {
        color: '#00D9FF',
        accentColor: '#5BE7FF',
        icon: '▶',
        label: 'Tech Demo',
        shape: 'tv', // Wide CRT style
    },
    blog: {
        color: '#5BE7FF',
        accentColor: '#00D9FF',
        icon: '📝',
        label: 'Case Study',
        shape: 'monitor', // Thin desktop monitor
    },
    tiktok: {
        color: '#00D9FF',
        accentColor: '#5BE7FF',
        icon: '📱',
        label: 'Micro Motion',
        shape: 'phone', // Vertical phone
    },
    linkedin: {
        color: '#00D9FF',
        accentColor: '#5BE7FF',
        icon: 'in',
        label: 'Milestone',
        shape: 'monitor',
    },
    codrops: {
        color: '#00D9FF',
        accentColor: '#5BE7FF',
        icon: '💧',
        label: 'Featured',
        shape: 'monitor',
    },
};

const RAW_CONTENT_DATA = [
    // ============ Case Studies / Projects ============
    {
        id: 'studio-selectiq',
        platform: 'blog',
        title: 'SelectIQ: AI-Powered Selection Platform & Intelligent Decision Workflows',
        description: 'An intelligent selection and decision-making platform powered by AI, designed to streamline complex choices with data-driven insights and intuitive workflows.',
        frontTexture: '/textures/studio/monitorfront_postnafbdoublewinner.webp',
        paintedFrontTexture: '/textures/studio/monitorfront_postnafbdoublewinner_painted.webp',
        thumbnail: null,
        url: '#project/selectiq',
        date: '2026-03-24',
        readTime: '8 min',
    },
    {
        id: 'studio-sg-all-in-one',
        platform: 'blog',
        title: 'SG-All in One: Unified Digital Toolkit & Scalable Full-Stack Platform',
        description: 'A comprehensive all-in-one digital platform combining essential tools, services, and utilities into a single seamless interface for maximum productivity.',
        frontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego_painted.webp',
        thumbnail: null,
        url: '#project/sg-all-in-one',
        date: '2026-02-15',
        readTime: '7 min',
    },
    {
        id: 'studio-luxury-tailor',
        platform: 'blog',
        title: 'Luxury Tailor Atelier: Bespoke WebGL Fabric Physics & Editorial UI',
        description: 'Translating haute couture craftsmanship into digital form with custom WebGL fabric warp shaders, editorial serif typography, and zero layout shift.',
        frontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec_painted.webp',
        thumbnail: null,
        url: '#project/luxury-tailor',
        date: '2026-01-10',
        readTime: '9 min',
    },
    {
        id: 'studio-jewellery-ecommerce',
        platform: 'linkedin',
        title: 'Fashion Jewellery Ecommerce: Sub-Second Faceted Edge Filtering',
        description: 'Detailed analysis of Supabase PostgreSQL relational schemas, Cloudinary dynamic image pipelines, and Next.js optimistic cart state sync.',
        thumbnail: null,
        url: '#project/fashion-jewellery-ecommerce',
        date: '2025-12-18',
        readTime: '6 min',
    },
    {
        id: 'studio-photography-platform',
        platform: 'blog',
        title: 'Photography Accessories: Relational Compatibility Matrix Engine',
        description: 'Building an interactive lens compatibility matrix backed by Express.js REST APIs, indexed database queries, and tactile dark room UI design.',
        thumbnail: null,
        url: '#project/photography-accessories-platform',
        date: '2025-11-28',
        readTime: '7 min',
    },
    {
        id: 'studio-micro-interaction',
        platform: 'tiktok',
        title: 'Designing Fluid Micro-Interactions in GSAP & Framer Motion',
        description: 'Creative engineering POV: Making static interfaces feel alive and responsive with spring physics curves and custom cursor magnetic triggers.',
        frontTexture: '/textures/studio/phonefront_followmeontiktok.webp',
        paintedFrontTexture: '/textures/studio/phonefront_followmeontiktok_painted.webp',
        thumbnail: null,
        url: '#',
        date: '2026-03-01',
        views: '5.2K',
        likes: '840',
    },
    {
        id: 'studio-perf',
        platform: 'blog',
        title: 'Core Web Vitals & WebGL 60FPS Optimization Checklist',
        description: 'Step-by-step checklist to sustain 60fps WebGL canvas updates and achieve 100/100 Lighthouse scores on heavy interactive portfolio sites.',
        thumbnail: null,
        url: '#',
        date: '2025-10-15',
        readTime: '10 min',
    },
];

const ytTextures = ['/textures/studio/tvfront_filmikprojektdlamultiego.webp', '/textures/studio/tvfront_filmikedytowaniezdjec.webp'];
const ytPaintedTextures = ['/textures/studio/tvfront_filmikprojektdlamultiego_painted.webp', '/textures/studio/tvfront_filmikedytowaniezdjec_painted.webp'];
const blogTextures = ['/textures/studio/monitorfront_postnafbdoublewinner.webp'];
const blogPaintedTextures = ['/textures/studio/monitorfront_postnafbdoublewinner_painted.webp'];
const ttTextures = ['/textures/studio/phonefront_followmeontiktok.webp'];
const ttPaintedTextures = ['/textures/studio/phonefront_followmeontiktok_painted.webp'];

let ytIdx = 0, blogIdx = 0, ttIdx = 0;
let ytPIdx = 0, blogPIdx = 0, ttPIdx = 0;

export const CONTENT_DATA = RAW_CONTENT_DATA.map((item) => {
    return {
        ...item,
        frontTexture: item.frontTexture || (
            item.platform === 'youtube' ? ytTextures[ytIdx++ % ytTextures.length] :
                item.platform === 'blog' ? blogTextures[blogIdx++ % blogTextures.length] :
                    ttTextures[ttIdx++ % ttTextures.length]
        ),
        paintedFrontTexture: item.paintedFrontTexture || (
            item.platform === 'youtube' ? ytPaintedTextures[ytPIdx++ % ytPaintedTextures.length] :
                item.platform === 'blog' ? blogPaintedTextures[blogPIdx++ % blogPaintedTextures.length] :
                    ttPaintedTextures[ttPIdx++ % ttPaintedTextures.length]
        )
    };
});

export const getContentByPlatform = (platform) => {
    if (platform === 'all') return CONTENT_DATA;
    return CONTENT_DATA.filter(item => item.platform === platform);
};

export const getLatestContent = () => {
    return [...CONTENT_DATA].sort((a, b) => new Date(b.date) - new Date(a.date))[0];
};
