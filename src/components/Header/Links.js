import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Links = () => {
    return (
        <>
            <NavLink to="/welcome" className={styles.Link} activeClassName={styles.LinkActive}>
                Welcome
            </NavLink>
            <NavLink to="/" className={styles.Link} activeClassName={styles.LinkActive} exact>
                Home
            </NavLink>
            <NavLink
                to="/attribute-filter-components"
                className={styles.Link}
                activeClassName={styles.LinkActive}
                exact
            >
                Attribute Filter
            </NavLink>
            <NavLink
                to="/date-filter-component"
                className={styles.Link}
                activeClassName={styles.LinkActive}
                exact
            >
                Date Filter
            </NavLink>
            <NavLink
                to="/export-components"
                className={styles.Link}
                activeClassName={styles.LinkActive}
                exact
            >
                Export
            </NavLink>
            <NavLink to="/drilling" className={styles.Link} activeClassName={styles.LinkActive} exact>
                Drilling
            </NavLink>
            <NavLink to="/pivot-table" className={styles.Link} activeClassName={styles.LinkActive} exact>
                Pivot Table
            </NavLink>
            <NavLink to="/visualization" className={styles.Link} activeClassName={styles.LinkActive} exact>
                Visualizations
            </NavLink>
        </>
    );
};

export default Links;
