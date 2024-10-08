import { useState, useRef, useEffect } from "react";

export const Accordion = ({ faq }) => {
    const { question, answer } = faq;
    const [show, setShow] = useState(false);
    const contentRef = useRef(null);  // Reference for the answer content

    useEffect(() => {
        if (show) {
            contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
        } else {
            contentRef.current.style.maxHeight = '0px';
        }
    }, [show]);

    return (
        <div>
            <h2 id="accordion-flush-heading-1">
                <button 
                    onClick={() => setShow(!show)} 
                    type="button" 
                    className="text-lg flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                    data-accordion-target="#accordion-flush-body-1"
                    aria-expanded={show}
                    aria-controls="accordion-flush-body-1"
                >
                    <span className="text-xl text-slate-900 dark:text-white">{question}</span>
                    <svg 
                        data-accordion-icon 
                        className={`w-6 h-6 shrink-0 transition-transform duration-300 ${show ? 'rotate-180' : 'rotate-0'}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            fillRule="evenodd" 
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </button>
            </h2>     
            <div 
                id="accordion-flush-body-1" 
                ref={contentRef}
                className={`transition-all duration-300 ease-in-out overflow-hidden transform ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} 
                style={{ maxHeight: show ? '500px' : '0px' }}  // Set a large maxHeight when visible
                aria-labelledby="accordion-flush-heading-1"
            >
                <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                    <p className="text-lg mb-2 text-gray-500 dark:text-gray-400">{answer}</p>
                </div>
            </div>                           
        </div>
    );
}
