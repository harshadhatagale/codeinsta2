import React from 'react'
import styles from "../styles/privacy.module.css"
import HeadTag from '@/components/HeadTag'
export default function privacy_policy() {
    return (
        <>
        <HeadTag title="Privacy Policy" description="Explore comprehensive coding tutorials on our blog, where we demystify programming concepts, provide hands-on examples, and guide you through real-world projects. From beginner-friendly introductions to advanced coding challenges, our tutorials cover a wide range of programming languages and technologies" canUrl="https://www.codeinsta.tech/privacy_policy" />
            <div className={`${styles.content} pt-5 px-12 lg:px-12 flex-col flex justify-center items-center justify-items-center  pb-5`}>
                <h1>Privacy Policy</h1>

                <p>This Privacy Policy describes how Code Insta collects, uses, and shares personal information when you visit or make a purchase from https://www.codeinsta.tech.</p>

                <h2>Personal Information We Collect</h2>
                <p>

                    When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as &quot;Device Information&quot;.

                    We collect Device Information using the following technologies:</p>

                <ul>
                    <li>
                        &quot;Cookies&quot; are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit http://www.allaboutcookies.org.
                    </li>
                    <li>
                        &quot;Log files&quot; track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.
                    </li>
                    <li>
                        &quot;Web beacons&quot;, &quot;tags&quot;, and &quot;pixels&quot; are electronic files used to record information about how you browse the Site.
                    </li>
                </ul>

                <p> Additionally, when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information &quot;including credit card numbers&quot;, email address, and phone number. We refer to this information as &quot;Order Information&quot;.</p>
                <h2>How We Use Your Personal Information</h2>

                <p>We use the Order Information that we collect generally to fulfill any orders placed through the Site &quot;including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations&quot;. Additionally, we use this Order Information to:</p>
                <ul>
                    <li>
                        Communicate with you;
                    </li>
                    <li>
                        Screen our orders for potential risk or fraud; and
                    </li>
                    <li>
                        When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.
                    </li>
                </ul>

                <p>We use the Device Information that we collect to help us screen for potential risk and fraud &quot;in particular, your IP address&quot;, and more generally to improve and optimize our Site &quot;for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns&quot;.</p>

                <h2>Sharing Your Personal Information</h2>

                <p>We may share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use Google Analytics to help us understand how our customers use the Site--you can read more about how Google uses your Personal Information here: <a href='https://www.google.com/intl/en/policies/privacy/'>https://www.google.com/intl/en/policies/privacy/</a>. You can also opt-out of Google Analytics here: https://tools.google.com/dlpage/gaoptout.

                    Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant, or other lawful request for information we receive, or to otherwise protect our rights.
                </p>

                <h2>Your Rights</h2>

                If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.

                Additionally, if you are a European resident, we note that we are processing your information in order to fulfill contracts we might have with you &quot;for example if you make an order through the Site&quot;, or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information will be transferred outside of Europe, including to Canada and the United States.

                <h2>Data Retention</h2>

                When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.

                <h2>Changes</h2>

                We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.

                <h2>Contact Us</h2>

                <p>For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at codeinsta.gmail.com.</p>
            </div>
        </>
    )
}
