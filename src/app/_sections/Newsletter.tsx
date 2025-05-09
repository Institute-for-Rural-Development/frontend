const Newsletter = () => {
  return (
    <div className="">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="">Weekly articles</h3>
                <p className="">
                  Non laboris consequat cupidatat laborum magna. Eiusmod non
                  irure cupidatat duis commodo amet.
                </p>
              </div>
              <div>
                <h3 className="">No spam</h3>
                <p className="">
                  Officia excepteur ullamco ut sint duis proident non
                  adipisicing. Voluptate incididunt anim.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="order-1 lg:order-2">
            <h2 className="">Subscribe to our newsletter</h2>
            <p className="">
              Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing
              velit quis.
            </p>

            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Full name"
                  required
                  className="px-3 py-2"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  required
                  className="px-3 py-2"
                />
              </div>
              <button type="submit" className="w-full font-medium">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter