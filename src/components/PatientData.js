const preset_diagnosis = [
    ['Churg-Strauss Syndrome', 'Lung cancer', 'Lung abscess*'],
    ['Bacterial Meningitis*', 'Sinusitis', 'Vitamin B12 deficiency'],
    ['Vitamin B12 Deficiency', 'Hodgkin disease', 'Aortic Arch Syndrome'],
    ['Asthma*', 'Influenza', 'Sinusitis'],
    ['Duodenitis', 'Gastritis', 'Button battery ingestion*'],
]

const preset_diagnosis2 = [
    ['Bacterial Pneumonia*', 'Lung cancer', 'Photic Sneeze Reflex'],
    ['Adrenal cancer', 'Sinusitis', 'Concussion*'],
    ['Brucellosis', 'Cytomegalovirus', 'Renal failure'],
    ['Hay Fever', 'Influenza', 'Sinusitis'],
    ['Protein C and S deficiencies', 'Angina*'],
]

const preset_diagnosis3 = [
    ['Brain Tumor*', 'Lung cancer', 'Lung abscess*'],
    ['Bacterial Meningitis*', 'Migraine', 'Intracranial Hemorrhage*'],
    ['Spinal infections*', 'Endocartitis*', 'Renal failure'],
    ['Tuberculosis*', 'Lung abscess*', 'Influenza'],
    ['Esophageal Perforation*', 'Peptic Ulcer', 'Gastritis', 'Angina*'],
]

const preset_patient_info = [
{gender: 'Male', age:'12 years to 18 years', region:'Scandinavia'},
{gender: 'Male', age:'60+ years', region:'South Africa'},
{gender: 'Female', age:'18 years to 30 years', region:'East Asia'},
{gender: 'Male', age:'1 year to 5 years', region:'Middle East'},
{gender: 'Female', age:'45 years to 60 years', region:'North America'},
]

const preset_patient_symptoms = [
    ['sneezing', 'sudden weight loss', 'chest pain'],
    ['headache on one side', 'extreme irritability'],
    ['sores in mouth', 'tiredness', 'night sweats', 'dizzy spells'],
    ['cough with phlegm (white)', 'persistent cough'],
    ['heart pain', 'black stools'],
]

export {preset_diagnosis, preset_diagnosis2, preset_diagnosis3, preset_patient_info, preset_patient_symptoms};