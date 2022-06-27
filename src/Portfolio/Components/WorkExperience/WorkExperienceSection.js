import React from 'react'
import './WorkExperienceSection.scss'
import { useTheme } from '../../../Hooks/ThemeProvider';

const WorkExperienceSection = () => {
    const [theme] = useTheme();

    return (
        <section id="work-experience"
            className={`workExperienceSection workExperienceSection__background--${theme}`}>

            <h1 className={`workExperienceSection__title workExperienceSection__title--${theme}`}>
                Work Experience
            </h1>
        </section>
    )
}

export default WorkExperienceSection