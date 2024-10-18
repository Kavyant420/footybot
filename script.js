document.addEventListener('keydown', function(e) { 
    
    if (e.key === 'F12') { 
        e.preventDefault(); 
    } 
    
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'I') { 
        e.preventDefault(); 
    } 
    
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'C') { 
        e.preventDefault(); 
    } 
    
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'J') { 
        e.preventDefault(); 
    } 
    
    if ((e.ctrlKey || e.metaKey) && e.key === 'U') { 
        e.preventDefault(); 
    } 
});
