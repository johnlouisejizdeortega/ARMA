<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display the homepage.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('Welcome');
    }

    /**
     * Display the about page.
     *
     * @param Request $request
     * @return \Inertia\Response
     */
    public function about(Request $request)
    {
        $courtId = $request->query('court');
        $courtData = null;

        if ($courtId) {
            // Define the courts data - this should match the data in AboutSection.tsx
            $courts = [
                'arma-litigation' => [
                    'id' => 'arma-litigation',
                    'image' => '/png/rayt.jpg',
                    'title' => 'Arma Litigation',
                    'description' => 'ARMA Litigation is a dispute resolution powerhouse, born in Leeds and now making waves in London and across the globe. Forged from two decades of proven success in commercial litigation, we are not your typical boutique practice. We are a genuine alternative to the established City and national firms, offering the same level of expertise and reach, but with a distinctly different approach. We are specialists, particularly adept at navigating high-stakes situations. Our core strength lies in injunctions and crisis management, providing decisive action when it matters most. We are comfortable operating at the highest levels, regularly appearing in the London Courts (RCJ, Court of Appeal, IPEC), the London Court of International Arbitration, and even venturing into uncommon sectors like national security and energy within the Investigatory Powers Tribunal (IPT). We are structured unlike any other. Helping vulnerable litigants with up to 30% of our workload being pro-bono.'
                ],
                'london-court' => [
                    'id' => 'london-court',
                    'image' => '/png/mid.jpg',
                    'title' => 'London Court',
                    'description' => 'Our London Court practice offers comprehensive legal representation in one of the world\'s most important legal centers. We handle cases ranging from commercial disputes to international arbitration with the highest level of professionalism.'
                ],
                'outside-court' => [
                    'id' => 'outside-court',
                    'video' => '/videos/3rdvid.mp4',
                    'title' => 'Outside Court',
                    'description' => 'Our Outside Court services focus on alternative dispute resolution methods, negotiation, and settlement strategies. We help clients resolve conflicts efficiently and effectively without necessarily proceeding to formal litigation.'
                ]
            ];

            if (isset($courts[$courtId])) {
                $courtData = $courts[$courtId];
            }
        }

        return Inertia::render('About', [
            'courtData' => $courtData
        ]);
    }

    /**
     * Display news article pages.
     *
     * @param int $id
     * @return \Inertia\Response
     */
    public function news($id)
    {
        // Define the news data - this should match the data in NewsSection.tsx
        $newsItems = [
            1 => [
                'id' => 1,
                'title' => 'Latest Project Launch',
                'content' => 'Our team has successfully launched the new platform with enhanced features and improved user experience. The platform introduces cutting-edge technology that will revolutionize how our clients interact with our services. This launch represents months of dedicated work from our development and design teams to create a seamless, intuitive interface that addresses the key challenges in the legal tech space.',
                'date' => 'April 3, 2025',
                'image' => '/images/news1.jpg',
                'video' => '/videos/3rdvid.mp4',
            ],
            2 => [
                'id' => 2,
                'title' => 'Industry Conference Highlights',
                'content' => 'Key takeaways from this year\'s tech conference and what it means for future developments. Our team participated in panel discussions on emerging legal technologies and regulatory changes affecting the industry. The conference provided valuable insights into upcoming trends and innovations that will shape legal practice in the coming years. Our representatives networked with leading experts and brought back strategic knowledge to enhance our service offerings.',
                'date' => 'March 27, 2025',
                'image' => '/png/news2.jpg',
            ],
            3 => [
                'id' => 3,
                'title' => 'New Partnership Announcement',
                'content' => 'We\'re excited to announce our strategic partnership with a leading technology provider. This collaboration will enhance our ability to serve clients with cutting-edge solutions and expanded resources. The partnership combines our legal expertise with advanced technological capabilities, creating a powerful synergy that will benefit our clients across all practice areas. Together, we aim to set new standards in legal service delivery and client satisfaction.',
                'date' => 'March 15, 2025',
                'image' => '/png/news3.jpg',
            ],
            4 => [
                'id' => 4,
                'title' => 'Team Member Recognition',
                'content' => 'Our senior developer has been recognized for contributions to open source projects. This prestigious acknowledgment highlights the exceptional talent within our organization and our commitment to giving back to the technical community. The recognized work has helped advance key technologies used throughout the legal industry, demonstrating our team\'s technical excellence and innovative thinking. We\'re proud to support team members in pursuing projects that have broader positive impacts beyond our organization.',
                'date' => 'March 10, 2025',
                'image' => '/png/news4.jpg',
            ],
            5 => [
                'id' => 5,
                'title' => 'Industry Award Nomination',
                'content' => 'Our flagship product has been nominated for the annual industry excellence award. This nomination recognizes our commitment to innovation and quality in developing solutions that address real challenges in the legal sector. The judging panel specifically praised our user-centered design approach and the measurable improvements our product has delivered for clients. The award ceremony will take place next month, and we\'re honored to be among the distinguished finalists.',
                'date' => 'March 5, 2025',
                'image' => '/png/news5.jpg',
            ],
            6 => [
                'id' => 6,
                'title' => 'Community Outreach Program',
                'content' => 'Details about our upcoming community engagement and education initiatives. Our firm is launching a series of free legal workshops and clinics in underserved communities, beginning next month. These programs aim to improve access to justice and legal literacy among vulnerable populations. Our team of volunteers will provide guidance on common legal issues and connect participants with appropriate resources for further assistance. This initiative reflects our core values of social responsibility and commitment to making a positive difference.',
                'date' => 'February 28, 2025',
                'image' => '/images/news6.jpg',
                'video' => '/videos/2ndvid.mp4',
            ],
        ];

        // Get the news item data or return 404 if not found
        $newsItem = isset($newsItems[$id]) ? $newsItems[$id] : null;

        if (!$newsItem) {
            abort(404);
        }

        return Inertia::render('News/NewsPage' . $id, [
            'newsItem' => $newsItem
        ]);
    }
}