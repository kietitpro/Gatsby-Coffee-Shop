import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default function info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Dalgona?" />
        <div className="row">
          <div className="col-10.col-sm-8 mx-auto text-center">
            <p className=" lead text-muted mb-5">
              Dalgona coffee is a beverage made by whipping equal proportions of
              instant coffee powder, sugar, and hot water until it becomes
              creamy and then adding it to cold or hot milk. Occasionally, it is
              topped with coffee powder, cocoa, crumbled biscuits, or honey. The
              name is derived from dalgona, a Korean sugar sweet, due to the
              resemblance in taste and appearance, though most dalgona coffee
              doesn't actually contain dalgona
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
