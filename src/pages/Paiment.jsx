import React from 'react'
import"../styles/paiment.css"
function paiment() {
  return (
    <div class="sdsd">
        <section class="pricing-section bg-7">
            
            <div class="pricing pricing--norbu">
                <div class="pricing__item">
                    <h3 class="pricing__title">Beginner Savers</h3>
                    <p class="pricing__sentence">For people who are starting out in the water saving business</p>
                    <div class="pricing__price"><span class="pricing__currency">$</span>19<span class="pricing__period">/ month</span></div>
                    <ul class="pricing__feature-list">
                        <li class="pricing__feature">Free water saving e-book</li>
                        <li class="pricing__feature">Free access to forums</li>
                        <li class="pricing__feature">Beginners tips</li>
                    </ul>
                    <button class="pricing__action">Choose plan</button>
                </div>
                <div class="pricing__item pricing__item--featured">
                    <h3 class="pricing__title">Advanced Savers</h3>
                    <p class="pricing__sentence">For experienced water savers who'd like to push their limits</p>
                    <div class="pricing__price"><span class="pricing__currency">$</span>29<span class="pricing__period">/ month</span></div>
                    <ul class="pricing__feature-list">
                        <li class="pricing__feature">Free water saving e-book</li>
                        <li class="pricing__feature">Free access to forums</li>
                        <li class="pricing__feature">Advanced saving tips</li>
                    </ul>
                    <button class="pricing__action">Choose plan</button>
                </div>
                <div class="pricing__item">
                    <h3 class="pricing__title">Pro Savers</h3>
                    <p class="pricing__sentence">For all the professionals who'd like to educate others, too</p>
                    <div class="pricing__price"><span class="pricing__currency">$</span>79<span class="pricing__period">/ month</span></div>
                    <ul class="pricing__feature-list">
                        <li class="pricing__feature">Access to all books</li>
                        <li class="pricing__feature">Unlimited board topics</li>
                        <li class="pricing__feature">Beginners tips</li>
                    </ul>
                    <button class="pricing__action">Choose plan</button>
                </div>
            </div>
        </section>
        



    </div>
  )
}

export default paiment