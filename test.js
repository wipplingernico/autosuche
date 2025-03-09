<script>
// Hole alle Filtergruppen
const filterGroups = document.querySelectorAll('.filter-group');

// Iteriere durch jede Filtergruppe
filterGroups.forEach(group => {
  // Suche nach dem Titel der Gruppe, der "Hersteller" enthält
  const titleElement = group.querySelector('.sb-title span');
  
  // Überprüfe, ob der Titel "Hersteller" ist
  if (titleElement?.textContent.trim() === 'Hersteller') {
    // Finde die Liste der Hersteller
    const tagsList = group.querySelector('.tags-list');
    
    if (tagsList) {
      // Alle Listenelemente der Hersteller holen
      const tagsListItems = Array.from(tagsList.querySelectorAll('li.tags-link'));
      
      // Die Elemente alphabetisch sortieren
      tagsListItems.sort((a, b) => {
        const textA = a.textContent.trim().toLowerCase();
        const textB = b.textContent.trim().toLowerCase();
        return textA.localeCompare(textB);
      });

      // Erstelle das neue Listenelement für "JR Wheels"
      const jrWheelsLi = document.createElement('li');
      jrWheelsLi.classList.add('tags-link');
      jrWheelsLi.setAttribute('data-tag-value', 'japan-racing-wheels');

      // Erstelle das Link-Element und füge es hinzu
      const jrWheelsLink = document.createElement('a');
      jrWheelsLink.href = '/collections/alle-felgen/japan-racing-wheels';
      jrWheelsLink.title = 'japan-racing-wheels';
      jrWheelsLink.textContent = 'JR Wheels';

      // Füge das Link-Element zum Listenelement hinzu
      jrWheelsLi.appendChild(jrWheelsLink);

      // Füge das Listenelement für "JR Wheels" an der richtigen Position ein
      const jrWheelsIndex = tagsListItems.findIndex(item => item.textContent.trim().toLowerCase() > jrWheelsLink.textContent.trim().toLowerCase());
      if (jrWheelsIndex === -1) {
        // Wenn "JR Wheels" der letzte Eintrag ist, füge es ans Ende an
        tagsListItems.push(jrWheelsLi);
      } else {
        // Ansonsten füge es an der richtigen Stelle ein
        tagsListItems.splice(jrWheelsIndex, 0, jrWheelsLi);
      }

      // Lösche alle aktuellen Listenelemente
      tagsList.innerHTML = '';

      // Füge alle sortierten und angepassten Elemente wieder zur Liste hinzu
      tagsListItems.forEach(item => {
        tagsList.appendChild(item);
      });
    }
  }
});
</script>
