import React from 'react';

const Message = () => {
    return (
        <div className='p-4 sm:ml-64'>
            <div className=" font-semibold text-lg text-black mb-2">Send Messege</div>
            <form className='border'>
                <div class="flex gap-4 flex-col items-start px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
                    <textarea id="chat" rows="1" class="h-32 block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Your message..."></textarea>
                    <div className="btn bg-black text-white px-20 ml-4 text-left"><span >Submit</span></div>
                </div>
            </form>

        </div>
    );
};

export default Message;