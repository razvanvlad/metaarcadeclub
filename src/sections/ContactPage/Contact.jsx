
import ContactStyleWrapper from "./Contact.style"

import locationIcon from "assets/images/kycimg/location.svg"
import mailIcon from "assets/images/kycimg/sms-notification.svg" 

const Contact = () => {
    return (
        <ContactStyleWrapper>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    Got a question, concern, or just want to say hi? We're all ears! <br></br>At the Meta Arcade, we're all about community and connection, so we'd love to hear from you. There are a few ways you can reach us. <br></br><br></br>

First, you can send us an email at contact@metaarcadeclub.com. Our team will be happy to get back to you as soon as possible. Or, if you prefer, you can hop on over to our Discord server and join the conversation. Our Discord server is the perfect place to get in touch with other NFT gaming enthusiasts and connect with the Meta Arcade team.<br></br><br></br>

So whether you have a question about our games, want to share some feedback, or just want to chat with us, we're here and ready to listen. Reach out to us today and let's start a conversation!

                    </div>
                    <div className="col-lg-4 offset-lg-2 col-md-5 offset-md-1">
                        <div className="contact_info">
                            <h3 className="contact_info_title">Contact Info</h3>
                            {/* <div className="contact_info_item">
                                <div className="info_item_icon">
                                    <img src={locationIcon} alt="icon" className="img-fluid" />
                                </div>
                                <div className="info_item_content">
                                    <h6>GAMFI HQ</h6>
                                    <p>GamFi Inc, 06 Highley St, Victoria, Germany</p>
                                    <a href="# ">Google Direction</a>
                                </div>
                            </div> */}
                            <div className="contact_info_item">
                                <div className="info_item_icon">
                                    <img src={locationIcon} alt="icon" className="img-fluid" />
                                </div>
                                <div className="info_item_content">
                                    <h6>Call Us</h6>
                                    <p>Mobile: (+44) - 739 912 7879</p>
                                </div>
                            </div>
                            <div className="contact_info_item">
                                <div className="info_item_icon">
                                    <img src={mailIcon} alt="icon" className="img-fluid" />
                                </div>
                                <div className="info_item_content">
                                    <h6>MAIL US</h6>
                                    <p>Support: contact@metaarcadeclub.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ContactStyleWrapper>
    )
}

export default Contact;