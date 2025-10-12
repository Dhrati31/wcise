import React from 'react'
import deadlines from '../../images/deadlines.png'

function ImportantLink() {
    return (
        <div className='flex flex-col items-center justify-center'>

            <div className='mt-10 ml-4 mr-4 mb-4 border-4 rounded-xl w-fit mx-auto'>
                <h3 className='text-[#1d3b58] font-bold text-4xl text-center lg:text-5xl'>IMPORTANT DEADLINES</h3>
                <div className='mt-4 flex flex-col items-center justify-center lg:flex-row'>
                    <img src={deadlines} alt="" className='lg:w-[450px] lg:h-[400px] mb-8' />
                    <div className='ml-4'>
                        <ol className='list-disc flex flex-col gap-4 ml-4 mr-4 text-[#1d3b58]'>
                            <li>
                                <div className='text-3xl'>SUBMISSION OF FINAL PAPER: </div>
                                <div className='text-xl'>October 31, 2025</div>
                            </li>
                            <li>
                                <div className='text-3xl'>PAPER ACCEPTANCE NOTIFICATION:</div>
                                <div className='text-xl'>November 15, 2025</div>
                            </li>
                            <li>
                                <div className='text-3xl'>RECEIVING CRC AND REGISTRATION:</div>
                                <div className='text-xl mb-4'>November 30, 2025</div>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImportantLink