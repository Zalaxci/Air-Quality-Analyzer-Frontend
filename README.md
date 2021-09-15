# Air Quality Analyzer - *Από το τμήμα CODELAB της Εκπαίδευσης Υδρογείου*
Ένα από τα μεγαλύτερα προβλήματα των μεγάλων αστικών περιοχών είναι η ατμοσφαιρική ρύπανση. Με τον όρο ατμοσφαιρική ρύπανση, εννοούμε την προσθήκη ουσιών στην ατμόσφαιρα, που υπό φυσιολογικές συνθήκες δε θα υπήρχαν. Πολλές από αυτές τις ουσίες είναι βλαβερές όχι μόνο για τον ανθρώπινο, αλλά και για πολλούς άλλους ζωντανούς οργανισμούς. Τα αποτελέσματα της έκθεσής τους στους ρύπους αυτούς λειτουργούν αθροιστικά σε αυτούς. Όσο μεγαλύτερη είναι η έκθεση σε αυτές, τόσο μεγαλύτερες και οι βλάβες που μπορεί να προκληθούν. 

Η ατμοσφαιρική ρύπανση που οφείλεται σε ανθρωπογενείς πηγές, αποτελεί ένα σημαντικό περιβαλλοντικό πρόβλημα, με επιπτώσεις στην υγεία. Τα **αιωρούμενα σωματίδια** που είναι αποτέλεσμα της καύσης βιομάζας και ορυκτών καυσίμων, ιδιαίτερα από τα νοικοκυριά όταν έχουμε χαμηλές θερμοκρασίες, αναγνωρίζονται ως κάποιους από τους σημαντικότερους ρύπους από την άποψη των επιπτώσεων για την υγεία.

Παράλληλα, διαπιστώθηκε ότι η συχνότητα εμφάνισης έντονου **θερμικού στρες** (η αντίδραση του οργανισμού στην εξωτερική θερμοκρασία, όταν αυτή είναι χαμηλότερη ή υψηλότερη από την επιθυμητή) είναι στην Αθήνα δύο έως τρεις φορές μεγαλύτερη από τα τέλη της δεκαετίας του 1990 και μετά, σε σχέση με τις προηγούμενες δεκαετίες.

Στόχος του έργου μας, είναι να κάνουμε μια μελέτη σύγκρισης της ποιότητας του αέρα σε σχολικές μονάδες. Η ανάλυση των δεδομένων που θα συλλέξουμε, έχει πρωταρχικό στόχο την κατάταξη των σχολείων αυτών ως προς την ατμοσφαιρική ρύπανση και τη θερμική δυσφορία που είναι πιθανό κανείς να βιώσει, ώστε να μπορούμε εύκολα να αναγνωρίζουμε τα πιο ανθυγιεινά σχολικά περιβάλλοντα, αρχικά για την ενημέρωση και στη συνέχεια για την εύρεση τρόπων βελτίωσής τους. Έτσι, θα μπορούμε να προστατεύσουμε τις ευπαθείς ομάδες παρέχοντάς τες αναλυτικές πληροφορίες για την ποιότητα του αέρα ενός χώρου. Εάν γίνει μια κατάταξη των σχολείων σύμφωνα με τους δείκτες ποιότητας του αέρα που εισπνέουμε, θα δημοσιεύσουμε τις μετρήσεις ώστε να βοηθήσουμε την πολιτεία να πάρει μέτρα - όπου χρειάζεται,  για τη βελτίωση τους.

Με το έργο μας ευελπιστούμε να τοποθετηθούν σε κάθε σχολείο και οπουδήποτε αλλού κριθεί αναγκαίο για την προστασία των ευπαθών ομάδων, παρόμοιοι σταθμοί μέτρησης, ώστε να υπάρχει συνεχής παρακολούθηση του επιπέδου ρύπανσης της ατμόσφαιρας.

**Τα υλικά που θα χρησιμοποιήσουμε:**

  * Για την κατασκευή του μετρητή:
    * Raspberry Pi 3 -- **41€**
    * DHT11 Humidity & Temperature Sensor -- **5€**
    * Particulate Matter Sensor PMS5003 -- **29€**
   
  * Για την κατασκευή του Server και της βάσης δεδομένων:
    * Raspberry Pi 4 -- **56€**
  
**Το λογισμικό που θα χρησιμοποιήσουμε:**

  * Για τον προγραμματισμό του μετρητή:
    * Python
   
  * Για τον προγραμματισμό του Server και της βάσης δεδομένων:
    * Apache
    * MySQL

**Τιμές δείκτη ποιότητας αέρα:**

* Καλή: **0-10**

* Ικανοποιητική: **10-20**

* Μέτρια: **20-25**

* Κακή: **25-50**

* Πολύ-κακή: **50+**

## Frontend page - *Από τον Παντελή Γκανάτσα*
Η ιστοσελίδα αυτής της εργασίας που μπορεί να βρεθεί στο [github pages](https://zalaxci.github.io/Air-Quality-Analyzer-Frontend/) αποσκοπεί να αναπαραστήσει τις μετρήσεις κάθε σχολείου και να διευκολύνει την κατανόησή τους.

Συγκεκριμένα, υπάρχουν 4 γραφήματα για να αναπαρασταθούν και να συκγριθούν ανάμεσα στα σχολεία:
* τα αιωρούμενα σωματίδια μεγέθους 2.5 χιλιοστών
* τα αιωρούμενα σωματίδια μεγέθους 10 χιλιοστών
* η θερμοκρασία
* η υγρασία

...καθώς και ένας χάρτης όπου απεικονίζεται η τοποθεσία κάθε σχολείου ως μία καρφίτσα, με το πάτημα (click) της οποίας αποκρύπτονται ή εμφανίζονται οι μετρικές του αντίστοιχου σχολείου στα γραφήματα.

**Τα libraries που χρησιμοποιούνται:**
* tachyons (generic CSS)
* cash (generic JS)
* leaflet (JS + CSS, δημιουργία χάρτη)
* d3 και c3 (JS + CSS, δημιουργία γραφημάτων)
