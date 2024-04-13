import React from 'react'
import HeadTag from '@/components/HeadTag'
import styles from "../styles/about.module.css"
export default function about() {
    return (
        <>

            <div className={`${styles.content} pt-5 px-12 lg:px-12 flex-col flex justify-center items-center justify-items-center  pb-5`}>
                <header>
                    <h1>About Code Insta</h1>
                </header>

                <section>
                    <h2>Our Mission 🚀</h2>
                    <p>
                        At Code Insta, our mission is to empower and inspire individuals from all backgrounds to learn and excel in coding and technology. We believe that everyone should have access to quality resources and guidance to pursue their passion for coding, whether they're beginners or seasoned professionals.
                    </p>
                </section>

                <section>
                    <h2>What We Offer 📚</h2>
                    <h3>Educational Content</h3>
                    <p>
                        We provide a wide range of educational content, including tutorials, articles, and guides covering various programming languages, frameworks, tools, and technologies. Whether you're interested in web development, mobile app development, data science, or machine learning, we've got you covered!
                    </p>

                    <h3>Community Engagement</h3>
                    <p>
                        We foster a supportive and inclusive community where developers of all skill levels can connect, collaborate, and learn from each other. Join our forums, participate in discussions, and share your knowledge and experiences with fellow coders from around the world.
                    </p>

                    <h3>Career Resources</h3>
                    <p>
                        Looking to kickstart your career in tech or advance to the next level? Our career resources offer valuable tips, advice, and insights to help you land your dream job, build a strong portfolio, and stay updated on industry trends and best practices.
                    </p>
                </section>

                <section>
                    <h2>Meet the Team 👨‍💼</h2>
                    <h3>Founder & CEO: Harshad Hatagale</h3>
                    <p>
                        As the founder and CEO of Code Insta, Harshad is passionate about making coding accessible to everyone. With 5 years of experience in software development and a background in Computer science & engg., Harshad leads the team in creating engaging and informative content for our audience.
                    </p>

                    <h3>Content Creators</h3>
                    <p>
                        Our team of talented content creators are dedicated to producing high-quality tutorials, articles, and resources to help you level up your coding skills and stay ahead in the ever-evolving tech industry.
                    </p>

                    <h3>Community Managers</h3>
                    <p>
                        Our community managers are here to ensure that Code Insta remains a welcoming and inclusive space for all members. They facilitate discussions, moderate forums, and provide support to community members whenever needed.
                    </p>
                </section>

                <section>
                    <h2>Get in Touch 📫</h2>
                    <p>
                        Have questions, suggestions, or feedback? We'd love to hear from you! You can reach out to us via email at <a href="mailto:youremail@example.com">youremail@example.com</a> or connect with us on social media <a href="https://twitter.com/codeinsta">Twitter</a>, <a href="https://facebook.com/codeinsta">Facebook</a>, <a href="https://instagram.com/codeinsta">Instagram</a>.
                    </p>
                </section>
            </div>
        </>
    )
}
