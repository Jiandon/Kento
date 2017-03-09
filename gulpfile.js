/**
 * Created by Administrator on 2017年3月8日 0008.
 */
// 这是线上修改的内容，测试，哈哈哈
// 第一步不，引爆
 var gulp = require("gulp");


 // 第二步，创建任务

    // less处理任务
    // 引入less处理相关的包工具
var less = require("gulp-less");
var cssnano = require("gulp-cssnano");

gulp.task("style",function () {
    gulp.src("style/*.less")
        .pipe(less())
        .pipe(cssnano())
        .pipe(gulp.dest('dist/style'))
        .pipe(reload({
            stream: true
        }));
});

    // js文件处理任务
    // 引爆
    var concat = require("gulp-concat");
    var uglify = require("gulp-uglify");

    gulp.task("script",function () {
        gulp.src("js/*.js")
            .pipe(concat("all.js"))
            .pipe(uglify())
            .pipe(gulp.dest("dist/js"))
            .pipe(reload({
                stream: true
            }));
    });

    // img文件处理任务
    gulp.task("images",function () {
        gulp.src("img/*.*")
            .pipe(gulp.dest("dist/img"))
            .pipe(reload({
                stream: true
            }));
    });

    // html文件从处理任务
    // 引爆
    var htmlmin = require("gulp-htmlmin");

    gulp.task("html",function () {
        gulp.src("./*.html")
            .pipe(htmlmin({
                collapseWhitespace: true,
                collapseBooleanAttributes: true,
                removeAttributeQuotes: true,
                removeComments: true,
                removeEmptyAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true
            }))
            .pipe(gulp.dest("dist/"))
            .pipe(reload({
                stream: true
            }));
    });

    // browser-sync的加入
    // 引爆
    var browserSync = require("browser-sync");
    var reload = browserSync.reload;

    gulp.task("serve",function () {
        browserSync({
            server:{
                baseDir:["dist"]
            }
        },function(err,bs) {
            console.log(bs.options.getIn(["url","local"]));
        });

        // watch
        gulp.watch("style/*.less",['style']);
        gulp.watch("js/*.js",['script']);
        gulp.watch("img/*.*",['images']);
        gulp.watch("./*.html",['html']);
    });
