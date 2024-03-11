function solution(tickets) {
    let result = [];
    const visited = Array.from({ length: tickets.length }).fill(false);
    const departs = ["ICN"];
  
    dfs(visited, departs, tickets, result);
    
    return result.sort((a, b) =>  a.toString().localeCompare(b.toString()))[0]
}
  
function dfs(visited, departs, tickets, result) {
    if (departs.length === tickets.length + 1) {
        result.push([...departs]);
    }

    for (let i = 0; i < tickets.length; i++) {
        const [from, to] = tickets[i];
        const depart = departs[departs.length - 1];

      if (visited[i] || depart !== from) continue; 
    
      visited[i] = true;
      departs.push(to);

      dfs(visited, departs, tickets, result);
      
      visited[i] = false;
      departs.pop();
    }    
}
