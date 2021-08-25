let themeReadingEntryCharExcerpt = 360
let themeReadingEntrySentenceExcerpt = 3
entry_char_excerpt: 360
    entry_sentence_excerpt: 3
//先拿到字符串，第一个indexOf('<p>')的Index，第一个 indexOf('</p>),切出来，strip_html 删掉Tag，取前三句话

if(post.excerpt) {
    strip_html(post.excerpt)
    }else{
    strip_html(truncate(post.content,{length: theme.reading.entry_char_excerpt }).split(/[。.]+/, theme.reading.entry_sentence_excerpt))
    }
    strip_html(post.content.substring(post.content.indexOf('<p>')+1, post.content.indexOf('</p>'))).split(/[。.]+/, theme.reading.entry_sentence_excerpt)