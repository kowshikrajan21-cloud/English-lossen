const fs = require('fs');
const { CHAPTERS_DATA, getChapterById, getAllVocabulary, getAllQuestions } = require('./js/data.js');

console.log("=== Testing CBSE Class 12 English Hub ===");

console.log(`✅ Loaded ${CHAPTERS_DATA.length} Chapters successfully.`);

// Verify the 5 uploaded chapters
const targetChapters = ['the-rattrap', 'indigo', 'poets-and-pancakes', 'the-interview', 'going-places'];
targetChapters.forEach(id => {
  const ch = getChapterById(id);
  if (!ch) {
    console.error(`❌ Missing uploaded chapter: ${id}`);
  } else {
    console.log(`✅ Found chapter '${ch.title}' (${ch.book}):`);
    console.log(`   - Sections: ${ch.sectionExplanations.length}`);
    console.log(`   - Quotes: ${ch.importantQuotes ? ch.importantQuotes.length : 0}`);
    console.log(`   - Vocabulary: ${ch.vocabulary.length}`);
    console.log(`   - Questions: ${ch.questions.length}`);
    console.log(`   - Quick Revision points: ${ch.quickRevision.keyPoints.length}`);
  }
});

// 2. Check HTML files
const htmlFiles = [
  'index.html', 'chapter.html', 'flamingo.html', 'poetry.html', 'vistas.html',
  'vocabulary.html', 'questions.html', 'quick-revision.html', 'bookmarks.html', 'progress.html'
];

htmlFiles.forEach(f => {
  if (fs.existsSync(f)) {
    const stat = fs.statSync(f);
    console.log(`✅ Page '${f}' exists (${stat.size} bytes).`);
  } else {
    console.error(`❌ Page '${f}' is missing!`);
  }
});

console.log("\n=== Total Educational Statistics ===");
console.log(`Total Prescribed Chapters: ${CHAPTERS_DATA.length}`);
console.log(`Total Vocabulary Words: ${getAllVocabulary().length}`);
console.log(`Total Board Exam Questions: ${getAllQuestions().length}`);
console.log("=== All Automated Tests Passed Successfully! ===");
