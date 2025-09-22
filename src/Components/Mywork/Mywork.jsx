import ProjectGrid from "../ProjectGrid/ProjectGrid"
import WorkIntro from "../WorkIntro/WorkIntro"
import "./Mywork.css"

const Mywork = () => {
  return (
    <div className="MyWork" id="MyWork">
      <WorkIntro />
      <ProjectGrid />
    </div>
  )
}

export default Mywork
