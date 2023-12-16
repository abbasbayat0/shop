const Nav = () => {
    return (
        <div className="bg-black w-full flex absolute top-2">
            {/* left container */}
            <div className="flex flex-row w-1/2 p-3">
                {/* logo */}
                <img src={require("../images/carLogo.png")} alt="car logo" className="w-28" />

                {/* title */}
                <p className="text-white ml-2 text-2xl">autopile</p>
            </div>

            {/* right container */}
            <div className="flex w-1/2 justify-end p-3">
                <i className="text-white mr-2 text-2xl">a</i>
                <i className="text-white text-2xl">b</i>
            </div>
        </div>
    );
}
 
export default Nav;