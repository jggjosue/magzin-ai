import React from 'react'
import Link from "next/link";

export default function Privacy() {
    return (
        <section className="container w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="flex flex-col space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center">
                    PRIVACY POLICY
                </h2>
                <p className="text-muted-foreground">
                    This Privacy Policy describes how your personal information is collected, used and shared
                    when you visit or make a purchase from www.magzin.us (hereinafter referred to as
                    the “Site”).
                </p>
                <h3 className="text-xl font-bold tracking-tighter sm:text-xl">
                    PERSONAL INFORMATION
                </h3>
                <p className="text-muted-foreground">
                    When you visit the Site, we automatically collect certain information about your device,
                    including information about your web browser, IP address, time zone, and some of the
                    cookies that are installed on your device. Additionally, as you browse the Site, we collect
                    information about the individual web pages or products that you view, the web pages or
                    search terms that referred you to the Site, and information about how you interact with the
                    Site. We refer to this automatically collected information as “Device Information.”
                </p>
                <p className="text-muted-foreground">
                    We collect Device Information through the use of the following technologies:
                </p>
                <h3 className="text-xl font-bold tracking-tighter sm:text-xl">
                    HOW DO WE USE YOUR PERSONAL INFORMATION?
                </h3>
                <p className="text-muted-foreground">
                    We use the Order Information we collect generally to fulfill orders placed through the Site.
                    Examine our orders; and when in accordance with the preferences you shared with us, we
                    provide you with information or advertising related to our products or services.
                </p>
                <p className="text-muted-foreground">
                    We use the Device Information we collect to improve and optimize our Site (for example, by
                    generating reports and statistics on how our customers browse and interact with the Site and
                    to evaluate the success of our advertising and marketing campaigns).
                </p>
                <h3 className="text-xl font-bold tracking-tighter sm:text-xl">
                    SHARING YOUR PERSONAL INFORMATION
                </h3>
                <p className="text-muted-foreground">
                    We share your Personal Information with third parties to help us use your Personal
                    Information, as described above. We also use Google Analytics to help us understand how
                    our customers use the Site. You can learn more about how Google uses your Personal
                    Information here: https://www.google.com/intl/en/policies/privacy/. You can opt out of Google
                    Analytics here: https://tools.google.com/dlpage/gaoptout.
                </p>
                <p className="text-muted-foreground">
                    Finally, we may also share your Personal Information to comply with applicable laws and
                    regulations, to respond to a subpoena, search warrant or other lawful request for information
                    we receive, or to protect our rights.
                </p>
                <h3 className="text-xl font-bold tracking-tighter sm:text-xl">
                    BEHAVIORAL-DRIVEN ADVERTISING
                </h3>
                <p className="text-muted-foreground">
                    As described above, we use your Personal Information to provide you with targeted
                    advertisements or marketing communications that we believe may be of interest to you. For
                    more information about how targeted advertising works, you can visit the Network
                    Advertising Initiative ("NAI") educational page at
                    http://www.networkadvertising.org/understanding-online-advertising/how -does-it-work.
                </p>
                <p className="text-muted-foreground">
                    You can opt out of targeted advertising using the following links:
                </p>
                <p className="text-muted-foreground">
                    FACEBOOK: https://www.facebook.com/settings/?tab=ads
                </p>
                <p className="text-muted-foreground">
                    GOOGLE: https://adssettings.google.com/authenticated?hl=es
                </p>
                <h3 className="text-xl font-bold tracking-tighter sm:text-xl">
                    DO NOT TRACK
                </h3>
                <p className="text-muted-foreground">
                    Please note that we do not alter our Site's data collection and use practices when we see a
                    Do Not Track signal from your browser.
                </p>
                <h3 className="text-xl font-bold tracking-tighter sm:text-xl">
                    YOUR RIGHTS
                </h3>
                <p className="text-muted-foreground">
                    If you are a European resident, you have the right to access the personal information we
                    hold about you and to request that your personal information be corrected, updated or
                    deleted. If you wish to exercise this right, please contact us using the contact information
                    below. Additionally, if you are a European resident, we note that we are processing your information
                    to fulfill any contracts we may have with you (for example, if you place an order through the
                    Site) or to pursue our legitimate business interests listed above. Additionally, please note
                    that your information will be transferred outside of Europe, including Canada and the United
                    States.
                </p>
                <h3 className="text-xl font-bold tracking-tighter sm:text-xl">
                    DATA RETENTION
                </h3>
                <p className="text-muted-foreground">
                    When you place an order through the Site, we will maintain your Order Information for our
                    records unless and until you ask us to delete this information.
                </p>
                <h3 className="text-xl font-bold tracking-tighter sm:text-xl">
                    MINORS
                </h3>
                <p className="text-muted-foreground">
                    The site is not intended for persons under 18 years of age.
                </p>
                <h3 className="text-xl font-bold tracking-tighter sm:text-xl">
                    CHANGES
                </h3>
                <p className="text-muted-foreground">
                    We may update this privacy policy from time to time to reflect, for example, changes in our
                    practices or for other operational, legal or regulatory reasons.
                </p>
                <h3 className="text-xl font-bold tracking-tighter sm:text-xl">
                    CONTACT US
                </h3>
                <p className="text-muted-foreground">
                    For more information about our privacy practices, if you have any questions, or if you would
                    like to make a complaint, please contact us by email at commercial@couponmagzin.com
                </p>
                <p className="text-muted-foreground">
                    800 Third Avenue Associates, New York, NY, 10022, United States
                </p>
            </div>
        </section>
    )
}