import React from 'react'

const Test = () => {

    function listen() {
        document.getElementById("form1").innerHTML = "Iframe is loaded.";
      }


    return (
    <>
    <div className="wrapper">
        <form id="form1">
            <div>
                <label htmlFor="givenName">First Name:</label>
                <input autoComplete="given-name" name="givenName" id="firstName" type="text"/>
            </div>

            <div>
                <label htmlFor="city">City</label>
                <input autoComplete="address-level2" required type="text" id="city" name="city" />
            </div>
            <div>
                <label htmlFor="state">State / Province / Region (optional)</label>
                <input autoComplete="address-level1" type="text" id="state" name="state" />
            </div>
            <div>
                <label htmlFor="zip">ZIP / Postal code (optional)</label>
                <input autoComplete="postal-code" type="text" id="zip" name="zip" />
            </div>
            <div>
                <label htmlFor="country">Country</label>
                <input autoComplete="country" type="text" id="country" name="country" />
            </div>
            <button>Save address</button>
        </form>
    </div>
    </>
  )
}

export default Test
