function TeamPipeline({ teams }) {


    return (
        <div>
            {teams.teams?.map((team) => {
                return (
                    <h1>{team.name}</h1>
                )
            })}
        </div>
    )
}

export default TeamPipeline;