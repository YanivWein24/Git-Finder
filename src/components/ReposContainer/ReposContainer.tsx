import React from 'react'
import {RepoType} from '../../UserData'
import Repo from '../Repo/Repo'
import './ReposContainer.css'

const ReposContainer = ({repos}:{repos: RepoType[]}) => {
  return (
    <div className='reposContainer fade-in'>
        {<h1>Latest Repos:</h1>}
        {repos.map((repo) => (
            <Repo key={repo.id} name={repo.name} description={repo.description} url={repo.html_url} language={repo.language} stars={repo.stargazers_count} watchers={repo.watchers} forks={repo.forks}/>
        ))}
    </div>
  )
}

export default ReposContainer