import React from 'react';
import image1 from '../../../assets/images/image1.jpg'
import image2 from '../../../assets/images/image2.jpg'
import image3 from '../../../assets/images/image3.jpg'

export const Testimonials = () => {
  return (
    <section>
        <h1 className='
            text-2xl
            text-center
            font-semibold
            dark:text-slate-100
            mb-5
            underline
            underline-offset-8
        '>
            Student About eBookSphere
        </h1>
        <div className='
            grid
            mb-8
            border 
            border-gray-200
            shadow-sm
            dark:border-gray-700
            md:mb-12
            md:grid-cols-2
        '>
            <figure className='
                flex
                flex-col
                justify-center
                items-center
                p-8
                text-center
                bg-white
                rounded-t-lg
                border-b
                border-gray-200
                md:rounded-t-none
                md-rounded-tl-lg
                md:border-r
                dark:bg-gray-800
                dark:border-gray-700
            '>
                <blockquote className='
                    mx-auto
                    mb-4
                    max-w-2xl
                    text-gray-500
                    lg:mb-8
                    dark:text-gray-400
                '>
                    <h3 className='
                        text-lg
                        font-semibold
                        text-gray-900
                        dark:text-white
                    '>
                        Very easy this was to integrate
                    </h3>
                    <p className='
                        my-4
                        font-light
                    '>
                        "If you care for your time, I hands down would go with this."
                    </p>
                </blockquote>
                <figcaption className='
                    justify-center
                    flex
                    items-center
                    space-x-3
                '>
                    <img className='w-9 h-9 rounded-full' src={image3} alt="huy" />
                    <div className='space-y-0.5 font-medium dark:text-white text-left'>
                        <div>Huynh Minh Huy</div>
                        <div className='text-sm font-light text-gray-500 dark:text-gray-400'>Developer at Random AI</div>
                    </div>
                </figcaption>
            </figure>
            <figure className='
                flex
                flex-col
                justify-center
                items-center
                p-8
                text-center
                bg-white
                rounded-t-lg
                border-b
                border-gray-200
                md:rounded-t-none
                md-rounded-tl-lg
                md:border-r
                dark:bg-gray-800
                dark:border-gray-700
            '>
                <blockquote className='
                    mx-auto
                    mb-4
                    max-w-2xl
                    text-gray-500
                    lg:mb-8
                    dark:text-gray-400
                '>
                    <h3 className='
                        text-lg
                        font-semibold
                        text-gray-900
                        dark:text-white
                    '>
                        Solid foundation for any project
                    </h3>
                    <p className='
                        my-4
                        font-light
                    '>
                        "Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!"
                    </p>
                </blockquote>
                <figcaption className='
                    justify-center
                    flex
                    items-center
                    space-x-3
                '>
                    <img className='w-9 h-9 rounded-full' src={image2} alt="tran" />
                    <div className='space-y-0.5 font-medium dark:text-white text-left'>
                        <div>Nguyen Hoang Bao Tran</div>
                        <div className='text-sm font-light text-gray-500 dark:text-gray-400'>Lead designer at Random</div>
                    </div>
                </figcaption>
            </figure>
            <figure className='
                flex
                flex-col
                justify-center
                items-center
                p-8
                text-center
                bg-white
                rounded-t-lg
                border-b
                border-gray-200
                md:rounded-t-none
                md-rounded-tl-lg
                md:border-r
                dark:bg-gray-800
                dark:border-gray-700
            '>
                <blockquote className='
                    mx-auto
                    mb-4
                    max-w-2xl
                    text-gray-500
                    lg:mb-8
                    dark:text-gray-400
                '>
                    <h3 className='
                        text-lg
                        font-semibold
                        text-gray-900
                        dark:text-white
                    '>
                        Mindblowing workflow
                    </h3>
                    <p className='
                        my-4
                        font-light
                    '>
                        "Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application."
                    </p>
                </blockquote>
                <figcaption className='
                    justify-center
                    flex
                    items-center
                    space-x-3
                '>
                    <img className='w-9 h-9 rounded-full' src={image1} alt="duc" />
                    <div className='space-y-0.5 font-medium dark:text-white text-left'>
                        <div>Nguyen Tan Minh Duc</div>
                        <div className='text-sm font-light text-gray-500 dark:text-gray-400'>Software Engineer at Random</div>
                    </div>
                </figcaption>
            </figure>
            <figure className='
                flex
                flex-col
                justify-center
                items-center
                p-8
                text-center
                bg-white
                rounded-t-lg
                border-b
                border-gray-200
                md:rounded-t-none
                md-rounded-tl-lg
                md:border-r
                dark:bg-gray-800
                dark:border-gray-700
            '>
                <blockquote className='
                    mx-auto
                    mb-4
                    max-w-2xl
                    text-gray-500
                    lg:mb-8
                    dark:text-gray-400
                '>
                    <h3 className='
                        text-lg
                        font-semibold
                        text-gray-900
                        dark:text-white
                    '>
                        Efficient Collaborating
                    </h3>
                    <p className='
                        my-4
                        font-light
                    '>
                        "You have many examples that can be used to create a fast prototype for your team."
                    </p>
                </blockquote>
                <figcaption className='
                    justify-center
                    flex
                    items-center
                    space-x-3
                '>
                    <img className='w-9 h-9 rounded-full' src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_p200x200&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_eui2=AeGelZ9mzLPs-6qm_m1mqDJaWt9TLzuBU1Ba31MvO4FTULv5AXbrylDCp3GPTKlqj0g4At0GjRqTyNN1ehTB4DjE&_nc_ohc=kWxeXr9no-YQ7kNvgFiWbq3&_nc_ht=scontent.fdad2-1.fna&oh=00_AYD4-WI7OVhIOArdm4t1Jrd5lqnPGlHbwrbcVwTXYXSvOw&oe=66E3FDBA" alt="tu" />
                    <div className='space-y-0.5 font-medium dark:text-white text-left'>
                        <div>Vo Anh Tu</div>
                        <div className='text-sm font-light text-gray-500 dark:text-gray-400'>CTO at Random</div>
                    </div>
                </figcaption>
            </figure>
        </div>
    </section>
  )
}
