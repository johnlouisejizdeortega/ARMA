export interface NewsItem {
  id: number
  title: string
  excerpt: string
  content: string
  date: string
  image: string
  video?: string
  placeholder?: string
  size?: string
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Latest Project Launch",
    excerpt: "Our team has successfully launched the new platform with enhanced features and improved user experience.",
    content: "Our team has successfully launched the new platform with enhanced features and improved user experience. The platform introduces cutting-edge technology that will revolutionize how our clients interact with our services. This launch represents months of dedicated work from our development and design teams to create a seamless, intuitive interface that addresses the key challenges in the legal tech space.",
    date: "April 3, 2025",
    image: "/images/news1.jpg",
    video: "/videos/3rdvid.mp4",
    placeholder: "https://via.placeholder.com/800x500?text=News+1",
    size: "large",
  },
  {
    id: 2,
    title: "Industry Conference Highlights",
    excerpt: "Key takeaways from this year's tech conference and what it means for future developments.",
    content: "Key takeaways from this year's tech conference and what it means for future developments. Our team participated in panel discussions on emerging legal technologies and regulatory changes affecting the industry. The conference provided valuable insights into upcoming trends and innovations that will shape legal practice in the coming years. Our representatives networked with leading experts and brought back strategic knowledge to enhance our service offerings.",
    date: "March 27, 2025",
    image: "/png/news2.jpg",
    placeholder: "https://via.placeholder.com/400x400?text=News+2",
    size: "large",
  },
  {
    id: 3,
    title: "New Partnership Announcement",
    excerpt: "We're excited to announce our strategic partnership with a leading technology provider.",
    content: "We're excited to announce our strategic partnership with a leading technology provider. This collaboration will enhance our ability to serve clients with cutting-edge solutions and expanded resources. The partnership combines our legal expertise with advanced technological capabilities, creating a powerful synergy that will benefit our clients across all practice areas. Together, we aim to set new standards in legal service delivery and client satisfaction.",
    date: "March 15, 2025",
    image: "/png/news3.jpg",
    placeholder: "https://via.placeholder.com/300x200?text=News+3",
    size: "small",
  },
  {
    id: 4,
    title: "Team Member Recognition",
    excerpt: "Our senior developer has been recognized for contributions to open source projects.",
    content: "Our senior developer has been recognized for contributions to open source projects. This prestigious acknowledgment highlights the exceptional talent within our organization and our commitment to giving back to the technical community. The recognized work has helped advance key technologies used throughout the legal industry, demonstrating our team's technical excellence and innovative thinking. We're proud to support team members in pursuing projects that have broader positive impacts beyond our organization.",
    date: "March 10, 2025",
    image: "/png/news4.jpg",
    placeholder: "https://via.placeholder.com/300x200?text=News+4",
    size: "small",
  },
  {
    id: 5,
    title: "Industry Award Nomination",
    excerpt: "Our flagship product has been nominated for the annual industry excellence award.",
    content: "Our flagship product has been nominated for the annual industry excellence award. This nomination recognizes our commitment to innovation and quality in developing solutions that address real challenges in the legal sector. The judging panel specifically praised our user-centered design approach and the measurable improvements our product has delivered for clients. The award ceremony will take place next month, and we're honored to be among the distinguished finalists.",
    date: "March 5, 2025",
    image: "/png/news5.jpg",
    placeholder: "https://via.placeholder.com/300x200?text=News+5",
    size: "small",
  },
  {
    id: 6,
    title: "Community Outreach Program",
    excerpt: "Details about our upcoming community engagement and education initiatives.",
    content: "Details about our upcoming community engagement and education initiatives. Our firm is launching a series of free legal workshops and clinics in underserved communities, beginning next month. These programs aim to improve access to justice and legal literacy among vulnerable populations. Our team of volunteers will provide guidance on common legal issues and connect participants with appropriate resources for further assistance. This initiative reflects our core values of social responsibility and commitment to making a positive difference.",
    date: "February 28, 2025",
    image: "/images/news6.jpg",
    video: "/videos/2ndvid.mp4",
    placeholder: "https://via.placeholder.com/300x200?text=News+6",
    size: "small",
  },
];

export default newsItems;
