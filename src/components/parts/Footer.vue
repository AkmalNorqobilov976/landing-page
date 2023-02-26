<template>
    <footer>
        <div class="footer">
            <div class="footer-item">
                <div class="footer-item__title">
                    AR Shakir
                </div>
                <div class="footer-item__subtitle">
                    Simple innate summer fat appear basket his desire joy.
                </div>
                <div class="footer_item__messengers">

                </div>
            </div>
            <div class="footer-item">
                <div class="footer-item__title">
                    Company
                </div>
                <ul class="footer_item__lists">
                    <li>
                        About Us
                    </li>
                    <li>
                        Career
                    </li>
                    <li>
                        Blog
                    </li>
                    <li>
                        Career
                    </li>
                    <li>
                        Pricing
                    </li>
                </ul>
            </div>
            <div class="footer-item">
                <div class="footer-item__title">
                    Resources
                </div>
                <ul class="footer_item__lists">
                    <li>
                        Templates
                    </li>
                    <li>
                        Tutorials
                    </li>
                    <li>
                        Free Resources
                    </li>
                    <li>
                        Contract Templates
                    </li>
                </ul>
            </div>
            <div class="footer-item">
                <div class="footer-item__title">
                    Join Our Newsletter
                </div>
                <div class="footer_item__form">
                    <form>
                        <input type="email" placeholder="Your Email Address">
                        <button>Subscribe</button>
                    </form>
                </div>
                <div class="footer-item__subtitle">
                    *  Will send you weekly updates for your better
                    finance management.
                </div>
            </div>
        </div>
        <p class="footer-copyright">
            Copyright @ AR Shakir 2022. All Rights Reserved.
        </p>
    </footer>
</template>


<style lang="scss" scoped>
 .footer {
    display: flex;
    gap: 10rem;
    margin: 0 17.2rem;
    padding: 12.3rem 0;
    justify-content: space-between;
    border-bottom: #E5E5EA 2px solid;

    &-item {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        &__title {
            font-weight: 700;
            font-size: 2.1rem;
            line-height: 2.8rem;
            letter-spacing: -0.02em;
        }
        &__subtitle {
            font-weight: 500;
            font-size: 1.6rem;
            line-height: 2.6rem;
            letter-spacing: -0.02em;
            color: #181433;
            opacity: 0.5;
        }
        ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 1.8rem;
            margin-top: 2.4rem;
            font-weight: 500;
            font-size: 1.6rem;
            line-height: 2.4rem;
            color: #181433;
        }

        
            form {
                display: flex;
                padding: 2.4rem 0;
                input {
                    outline: none;
                    border: none;
                    background: #F9F9F9;
                    font-weight: 500;
                    font-size: 1.6rem;
                    line-height: 2.6rem;
                    padding: 1.5rem;
                    letter-spacing: -0.02em;
                    color: #181433;
                    opacity: 0.2;
                }
                button {
                    padding: 1.3rem 4.3rem;
                    outline: none;
                    border: none;
                    color: white;
                    background: #00E1F0;
                    font-weight: 500;
                    font-size: 1.6rem;
                    line-height: 2.6rem;
                    letter-spacing: -0.02em;
                }
        }
    }

    &-copyright {
        padding: 4rem 0 10rem 0;
        text-align: center;
        font-weight: 500;
        font-size: 1.6rem;
        line-height: 2.6rem;
        text-align: center;
        letter-spacing: -0.02em;

        color: #181433;
    }
 }
</style>