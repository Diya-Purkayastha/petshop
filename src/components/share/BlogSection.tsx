export default function BlogSection() {
  return (
    <section className="bg-[#f2eaea] py-20 px-5 md:px-20">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black flex items-center gap-2">
          Latest From Blog
          <span className="text-[#ff6600] text-3xl">🐾</span>
        </h2>
        <button className="flex items-center gap-2 text-[#3a3a3a] font-medium hover:text-[#7b2ff7] transition">
          View All Posts
          <span className="text-[#7b2ff7] text-xl">›</span>
        </button>
      </div>

      {/* Blog Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Blog Card 1 */}
        <div className=" rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-5">
          <div className="relative mb-5">
            <img
              src="https://demo2.themelexus.com/ziggy/wp-content/uploads/2022/05/blog-1-820x500.jpg"
              alt="Dog Blog"
              className="rounded-lg w-full h-60 object-cover"
            />
            <span className="absolute top-3 left-3 bg-[#7b2ff7] text-white text-sm font-semibold px-3 py-1 rounded-md">
              Lifestyles
            </span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600 mb-2">
            <span className="flex items-center gap-1 text-[#ff6600]">
              <i className="fa-solid fa-user"></i> By
            </span>
            <span className="font-bold text-black">Admin</span>
            <span className="flex items-center gap-1 text-[#ff6600]">
              <i className="fa-regular fa-calendar"></i>
            </span>
            <span>June 3, 2022</span>
          </div>
          <h3 className="text-xl font-extrabold mb-3 text-black">
            How to Choose the Right Bully Stick for Your Dog
          </h3>
          <p className="text-gray-500 mb-5 leading-relaxed">
            Below is an excerpt of porch.com’s article “Moving With Pets? We
            Have the Experts’ Advice to Do It Properly”.
          </p>
          <button className="bg-[#7b2ff7] hover:bg-[#6a25d9] text-white px-6 py-2 rounded-full font-semibold flex items-center gap-2 transition">
            Read More <span className="text-white text-lg">›</span>
          </button>
        </div>

        {/* Blog Card 2 */}
        <div className=" rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-5">
          <div className="relative mb-5">
            <img
              src="https://demo2.themelexus.com/ziggy/wp-content/uploads/2022/05/blog-4-820x500.jpg"
              alt="Dog Blog"
              className="rounded-lg w-full h-60 object-cover"
            />
            <div className="absolute top-3 left-3 flex gap-2">
              <span className="bg-[#7b2ff7] text-white text-sm font-semibold px-3 py-1 rounded-md">
                Educational
              </span>
              <span className="bg-[#7b2ff7] text-white text-sm font-semibold px-3 py-1 rounded-md">
                Lifestyles
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600 mb-2">
            <span className="flex items-center gap-1 text-[#ff6600]">
              <i className="fa-solid fa-user"></i> By
            </span>
            <span className="font-bold text-black">Admin</span>
            <span className="flex items-center gap-1 text-[#ff6600]">
              <i className="fa-regular fa-calendar"></i>
            </span>
            <span>June 3, 2022</span>
          </div>
          <h3 className="text-xl font-extrabold mb-3 text-black">
            Saving Lives: Animal House Shelter And Downtown Pet Supply
          </h3>
          <p className="text-gray-500 mb-5 leading-relaxed">
            Below is an excerpt of porch.com’s article “Moving With Pets? We
            Have the Experts’ Advice to Do It Properly”.
          </p>
          <button className="bg-[#7b2ff7] hover:bg-[#6a25d9] text-white px-6 py-2 rounded-full font-semibold flex items-center gap-2 transition">
            Read More <span className="text-white text-lg">›</span>
          </button>
        </div>

        {/* Blog Card 3 */}
        <div className=" rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-5">
          <div className="relative mb-5">
            <img
              src="https://demo2.themelexus.com/ziggy/wp-content/uploads/2022/05/blog-8-820x500.jpg"
              alt="Dog Blog"
              className="rounded-lg w-full h-60 object-cover"
            />
            <div className="absolute top-3 left-3 flex gap-2">
              <span className="bg-[#7b2ff7] text-white text-sm font-semibold px-3 py-1 rounded-md">
                Educational
              </span>
              <span className="bg-[#7b2ff7] text-white text-sm font-semibold px-3 py-1 rounded-md">
                New
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600 mb-2">
            <span className="flex items-center gap-1 text-[#ff6600]">
              <i className="fa-solid fa-user"></i> By
            </span>
            <span className="font-bold text-black">Admin</span>
            <span className="flex items-center gap-1 text-[#ff6600]">
              <i className="fa-regular fa-calendar"></i>
            </span>
            <span>June 3, 2022</span>
          </div>
          <h3 className="text-xl font-extrabold mb-3 text-black">
            Himalayan Yak Chews: 11 Benefits You Need To Know
          </h3>
          <p className="text-gray-500 mb-5 leading-relaxed">
            Below is an excerpt of porch.com’s article “Moving With Pets? We
            Have the Experts’ Advice to Do It Properly”.
          </p>
          <button className="bg-[#7b2ff7] hover:bg-[#6a25d9] text-white px-6 py-2 rounded-full font-semibold flex items-center gap-2 transition">
            Read More <span className="text-white text-lg">›</span>
          </button>
        </div>
      </div>
    </section>
  );
}
